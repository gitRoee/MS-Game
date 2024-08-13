import { fruits, highCreditScore, mediumCreditScore, RigChanceByCredits } from "../consts/jackpot";
import { Fruit } from "../types/jackpot";

export const rollSlots = (sessionCredits: number): Fruit[] => {
    const chanceToRig = sessionCredits > highCreditScore ? RigChanceByCredits[highCreditScore] 
        : sessionCredits > mediumCreditScore ? RigChanceByCredits[mediumCreditScore] 
        : 0;
    let randSlots = randomizeSlots();

    if(randSlots.every(slot => slot === randSlots[0]) && chanceToRig > 0) {
        const shouldRollAgain = Math.floor(Math.random() * 100) < chanceToRig;
        
        if (shouldRollAgain) {
            randSlots = randomizeSlots();
        }
    }

    return randSlots;
}

const randomizeSlots = (): Fruit[] => {
    const rollResults: Fruit[] = [];
    const slotsLen = 3;

    for (let index = 0; index < slotsLen; index++) {
        const fruitIndex = Math.floor(Math.random() * fruits.length);
        rollResults.push(fruits[fruitIndex]);
    }

    return rollResults;
}