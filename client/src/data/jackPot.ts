import axios from "axios"
import { GameSessionFromServer } from "../types/jackpot";

const JACKPOT_SERVER_ENDPOINT = 'http://localhost:3000/api/jackpot';

export const createGameSession = async (): Promise<GameSessionFromServer> => {
    const res = await axios.post(`${JACKPOT_SERVER_ENDPOINT}/startSession`);

    return res.data;
};

