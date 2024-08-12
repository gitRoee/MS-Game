import { useEffect, useState } from "react";
import TopBar from "../../components/topBar"
import InfoBar from "../../components/InfoBar";
import { Stack } from "@mui/material";
// import { createGameSession } from "../../data/jackPot";

const JackpotPage = () => {
    const [sessionId, setSessionId] = useState('');
    const [credits, setCredits] = useState(0); // save them on server
    
    useEffect(()=> {
        // possibly needs to be in await
        // const gameSession = createGameSession();
        // setSessionId(gameSession.id)
        // setCredits(gameSession.credits)
    }, []);


    return (
        <Stack>
            <TopBar />
            <InfoBar credits={credits} />
        </Stack>
    )
}

export default JackpotPage;
