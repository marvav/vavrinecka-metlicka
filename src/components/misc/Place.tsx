import {Box} from "@mui/material";

export interface PlaceProps {
    place: string | undefined
    defaultValue: string
}

function Place({place, defaultValue}: PlaceProps) {
    return <Box sx={{ display: "flex", alignItems: "center" }}>
        <h3 style={{ fontSize: "1rem", lineHeight: "1.5" }}>Místo:</h3>
        <p style={{ fontSize: "1rem", lineHeight: "1.5", paddingLeft: "0.5rem" }}>{place ?? defaultValue}</p>
    </Box>
}

export default Place;