import { db } from "../config/db";
import { CreditsByLetter, rollCost, creditsThreshHold } from "../consts/jackpot";
import { rollSlots } from "../helper/jackpot";
import { GameSessionService } from "../services/gameSession";
import { GameResult, NewGameSession } from "../types/jackpot";

export class JackpotController {
    #gameSessionService: GameSessionService;

    constructor() {
        this.#gameSessionService = new GameSessionService();
    }

    public async doesSessionExist(sessionId: string): Promise<boolean> {
        return await this.#gameSessionService.doesSessionExist(sessionId);
    }

    public async startSession(): Promise<NewGameSession> {
        return await this.#gameSessionService.startSession();
    }

    public async gameCalculation(sessionId: string): Promise<GameResult | undefined> {
        return await db.transaction(async (tx) => {
        let credits = await this.#gameSessionService.getCreditsBySession(sessionId, tx) - rollCost;
        
        if (credits > creditsThreshHold) {
            const rollResult = rollSlots(credits);

            if (rollResult.every(slot => slot === rollResult[0])) {
                credits += CreditsByLetter[rollResult[0]];
            }
            
            await this.#gameSessionService.updateCredits(sessionId, credits);

            return {
                credits,
                rollResult
            }
        }})
    }

    public async endSession(sessionId: string): Promise<String> {
        await this.#gameSessionService.endSession(sessionId);
        
        return sessionId;
    }
}