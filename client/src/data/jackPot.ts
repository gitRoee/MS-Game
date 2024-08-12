import axios from "axios"

export const createGameSession = async () => {
    const res = await axios.get('');

    return res.data;
}