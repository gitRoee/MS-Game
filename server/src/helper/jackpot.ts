import { fruits } from "../consts/jackpot";
import { Fruit } from "../types/jackpot";

export const rollSlots = (sessionCredits: number): Fruit[] => {
    const chanceToRig = sessionCredits > 60 ? 60 : sessionCredits > 40 ? 40 : 0;
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

    for (let i = 0; i < 3; i++) {
        const fruitIndex = Math.floor(Math.random() * fruits.length);
        rollResults.push(fruits[fruitIndex]);
    }

    return rollResults;
}