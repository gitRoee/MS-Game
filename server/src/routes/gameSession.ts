import { Router } from "express";
import { JackpotController } from "../controllers/gameSession";

export const jackpotRouter = Router();

const jackpotController = new JackpotController();

jackpotRouter.post("/startSession", async (_req, res) => {
    const gameSessionId = await jackpotController.startSession();

    return res.send(gameSessionId);
});

jackpotRouter.put("/roll/:sessionId", async (req, res) => {
    try {
        const sessionId = req.params.sessionId;

        const doesSessionExist = await jackpotController.doesSessionExist(sessionId);

        if (!doesSessionExist) {
            throw Error('No such session id');
        }

        const gameSessionId = await jackpotController.gameCalculation(sessionId);
        
        return res.send(gameSessionId);
    } catch(error) {
        res.sendStatus(404);
    }
});

jackpotRouter.put("/endSession/:sessionId", async (req, res) => {
    try {
        const sessionId = req.params.sessionId;
        const doesSessionExist = await jackpotController.doesSessionExist(sessionId);

        if (!doesSessionExist) {
            throw Error('No such session id');
        }

        const gameSessionId = await jackpotController.endSession(sessionId);
        
        return res.send(gameSessionId);
    } catch(error) {
        res.sendStatus(404);
    }
});