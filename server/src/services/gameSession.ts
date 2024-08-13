import { and, eq } from 'drizzle-orm';
import { db } from '../config/db';
import { gameSessions, users } from '../schemas/casino';
import { DrizzleTransaction } from '../types/drizzle';
import { NewGameSession } from '../types/jackpot';

export class GameSessionService {
    public async startSession (): Promise<NewGameSession>{
        const newSession = await db.insert(gameSessions).values({}).returning({id: gameSessions.id, credits: gameSessions.credits});

        return newSession[0];
    }

    public async getCreditsBySession (sessionId: string, tx?: DrizzleTransaction) : Promise<number>{
        const credits = await (tx || db).select({credits: gameSessions.credits}).from(gameSessions).where(and(eq(gameSessions.isDeleted, false), eq(gameSessions.id, sessionId)));

        return credits[0].credits;
    }

    public async doesSessionExist (sessionId: string): Promise<boolean> {
        const gameSession = await db.select({id: gameSessions.id}).from(gameSessions).where(and(eq(gameSessions.id, sessionId), eq(gameSessions.isDeleted, false)));

        return !!gameSession.length;
    }

    public async updateCredits (sessionId: string, creditsToReplace: number, tx?: DrizzleTransaction): Promise<void> {
        await (tx || db).update(gameSessions).set({credits: creditsToReplace}).where(and(eq(gameSessions.id, sessionId), eq(gameSessions.isDeleted, false)));    
    }

    public async endSession (sessionId: string) {
        await db.transaction(async (tx) => {
            await tx.update(gameSessions).set({isDeleted: true}).where(eq(gameSessions.id, sessionId));
            const selectedCredits = await tx.select({credits: gameSessions.credits}).from(gameSessions).where(eq(gameSessions.id, sessionId));
            await tx.insert(users).values([{credits: selectedCredits[0].credits}]);
            await tx.update(gameSessions).set({credits: 0}).where(eq(gameSessions.id, sessionId));
        });
    }
}