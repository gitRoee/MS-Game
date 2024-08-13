import { useEffect, useState } from "react";
import TopBar from "../../components/topBar"
import InfoBar from "../../components/InfoBar";
import { Stack } from "@mui/material";
import { createGameSession } from "../../data/jackPot";

const JackpotPage = () => {
    const [sessionId, setSessionId] = useState('');
    const [credits, setCredits] = useState(10); // save them on server

    const onStart = async () => {
        const gameSession = await createGameSession();

        setSessionId(gameSession.id);
        setCredits(gameSession.credits);
    }

    useEffect(() => {
        onStart();
    }, []);


    return (
        <Stack>
            <TopBar />
            <InfoBar credits={credits} />
        </Stack>
    )
}

export default JackpotPage;
