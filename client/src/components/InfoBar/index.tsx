import { Typography } from "@mui/material"

type props = {
    credits: number;
}

const InfoBar = ({ credits }: props) => {
    return (
        <Typography align="center" sx={{
            fontSize: 20,
            height: "5vh"
        }}>Credits: {credits}</Typography>
    )
}

export default InfoBar;
