export type GameSessionFromServer = {
    id: string;
    credits: number;
}

export type Slot = {
    fruit: string;
    cardId: string;
};

export type RollResult = {
    credits: number;
    rolls: string[];
}
