import { Box, keyframes, styled, Typography } from "@mui/material"
import { useEffect, useState } from "react";

type props = {
    rollTimeInSeconds: number;
    rolledFruit: string;
};

const spin = keyframes`
    0%  {transform:rotate(0deg);},
    100% {transform:rotate(360deg);}
`;

const SpinningTypography = styled(Typography)(() => ({
    animation: spin
}));

const JackpotCard = ({ rolledFruit, rollTimeInSeconds }: props) => {
    const [isSpinning, setIsSpinning] = useState(true);
    // const timerRef = useRef<number>();

    // const setTimer = () => {
    //     timerRef.current = setTimeout(() => setIsSpinning(false), rollTimeInSeconds * 1000);
    // };

    // useEffect(() => {
    //     if (!isSpinning) {
    //         setIsSpinning(true);
    //         clearTimeout(timerRef.current);
    //         setTimer();
    //     } else {
    //         setTimer();
    //     }

    //     return () => {
    //         clearTimeout(timerRef.current);
    //     };
    // }, [rolledFruit]);

    useEffect(() => {
        const timer = setTimeout(() => setIsSpinning(false), rollTimeInSeconds * 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <Box>
            {isSpinning ? <SpinningTypography>X</SpinningTypography> : <Typography>{rolledFruit}</Typography>}
        </Box >
    )
}

export default JackpotCard;
