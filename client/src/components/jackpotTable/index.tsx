import { Box, Button, Stack } from "@mui/material"
import JackpotCard from "./jackpotCard"
import { Slot } from "../../types/jackpot";

type props = {
    results: Slot[];
    onRoll(): Promise<void>;
    isRollingDisabled: boolean;
}

const JackpotTable = ({ results, onRoll, isRollingDisabled }: props) => {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
            {results.map((result, index) =>
                <Box marginRight={3}>
                    <JackpotCard key={result.cardId} rollTimeInSeconds={index + 1} rolledFruit={result.fruit} />
                </Box>
            )}
            <Button onClick={onRoll} disabled={isRollingDisabled}>Roll!</Button>
        </Stack>
    )
}

export default JackpotTable;
