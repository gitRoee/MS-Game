export type Fruits = [Fruit];
export type Fruit = 'W' | 'L' | 'O' | 'C';
export type GameResult = {
    credits: number;
    rollResult: Fruit[];
};
