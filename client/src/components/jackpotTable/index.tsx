import { Button, Stack } from "@mui/material"
import JackpotCard from "./jackpotCard"

type props = {
    results: {
        fruit: string,
        cardId: number
    }[];
    onRoll(): Promise<void>;
}

const JackpotTable = ({ results, onRoll }: props) => {

    return (
        <Stack direction={'row'}>
            {results.map((result, index) =>
                <JackpotCard key={result.cardId} rollTimeInSeconds={index + 1} rolledFruit={result.fruit} />
            )}
            <Button onClick={onRoll}>Roll!</Button>
        </Stack>
    )
}

export default JackpotTable
