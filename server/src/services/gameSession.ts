import { eq } from 'drizzle-orm';
import { db } from '../config/db';
import { gameSessions } from '../schemas/casino';
import { DrizzleTransaction } from '../types/drizzle';

export class GameSessionService {
    public async startSession (): Promise<string>{
        const newSession = await db.insert(gameSessions).values([]).returning({id: gameSessions.id});

        return newSession[0].id;
    }

    public async getCreditsBySession (sessionId: string, tx?: DrizzleTransaction) : Promise<number>{
        const credits = await (tx || db).select({credits: gameSessions.credits}).from(gameSessions).where(eq(gameSessions.id, sessionId));

        return credits[0].credits;
    }

    public async doesSessionExist (sessionId: string): Promise<boolean> {
        const gameSession = await db.select({id: gameSessions.id}).from(gameSessions).where(eq(gameSessions.id, sessionId));

        return !!gameSession.length;
    }

    public async changeCredits (sessionId: string, creditsToReplace: number, tx?: DrizzleTransaction): Promise<void> {
        await (tx || db).update(gameSessions).set({credits: creditsToReplace}).where(eq(gameSessions.id, sessionId));    
    }
}