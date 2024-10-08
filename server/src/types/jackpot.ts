export type Fruits = [Fruit];

export type Fruit = 'W' | 'L' | 'O' | 'C';

export type GameResult = {
    credits: number;
    rolls: Fruit[];
};

export type NewGameSession = {
    id: string;
    credits: number;
};
