import { Fruits } from "../types/jackpot";

export const fruits = ['W', 'O', 'L', 'C'] as const;

export const CreditsByLetter = {
    "W": 40,
    "O": 30,
    "L": 20,
    "C": 10
} as const satisfies Record<Fruits[number], number>;

export const rollCost = 1;
export const creditsThreshHold = -1;

export const mediumCreditScore = 40;
export const highCreditScore = 60;

export type ScoresToRig = [typeof mediumCreditScore, typeof highCreditScore];

export const RigChanceByCredits = {
    [mediumCreditScore]: 30,
    [highCreditScore]: 60
} as const satisfies Record<ScoresToRig[number], number>;
