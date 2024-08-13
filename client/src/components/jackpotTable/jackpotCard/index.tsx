import { Box, keyframes, styled, Typography } from "@mui/material"
import { useEffect, useState } from "react";

type props = {
    rollTimeInSeconds: number;
    rolledFruit: string;
};

const spin = keyframes`
    0% {transform:rotate(0deg)},
    100% {transform:rotate(360deg)}
`;

const SpinningTypography = styled(Typography)(() => ({
    animation: `${spin} 1s infinite ease`
}));

const JackpotCard = ({ rolledFruit, rollTimeInSeconds }: props) => {
    const [isSpinning, setIsSpinning] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsSpinning(false), rollTimeInSeconds * 1000);
    }, []);

    return (
        <Box>
            {isSpinning ? <SpinningTypography>X</SpinningTypography> : <Typography>{rolledFruit}</Typography>}
        </Box >
    )
}

export default JackpotCard;
