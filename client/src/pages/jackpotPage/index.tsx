import { useEffect, useState } from "react";
import TopBar from "../../components/topBar"
import InfoBar from "../../components/InfoBar";
import { Stack } from "@mui/material";
import { createGameSession, rollSlots } from "../../data/jackPot";
import { Slot } from "../../types/jackpot";
import { v4 as uuidv4 } from 'uuid';
import JackpotTable from "../../components/jackpotTable";
import { useErrorContext } from "../../hooks/useErrorContext";

const JackpotPage = () => {
    const [sessionId, setSessionId] = useState('');
    const [credits, setCredits] = useState(0);
    const [slots, setSlots] = useState<Slot[]>([]);
    const [isRolling, setIsRolling] = useState<boolean>(false);
    const { onError } = useErrorContext()

    const onStart = async () => {
        try {
            const gameSession = await createGameSession();

            setSessionId(gameSession.id);
            setCredits(gameSession.credits);
        } catch (error) {
            onError();
        }
    }

    const onRoll = async () => {
        try {
            const results = await rollSlots(sessionId);
            setSlots(results.rolls.map(roll => ({
                fruit: roll,
                cardId: uuidv4()
            })));

            setIsRolling(true);

            setTimeout(() => {
                setCredits(results.credits)
                setIsRolling(false);
            }, results.rolls.length * 1000);
        } catch (error) {
            onError();
        }
    }

    useEffect(() => {
        onStart();
    }, []);

    return (
        <Stack>
            <TopBar />
            <InfoBar credits={credits} />
            <JackpotTable results={slots} onRoll={onRoll} isRollingDisabled={(credits < 1) || isRolling} />
        </Stack>
    )
}

export default JackpotPage;
