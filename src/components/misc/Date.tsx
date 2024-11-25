import {Box} from "@mui/material";

export interface DateProps {
    date: string | undefined
    defaultValue: string
}

function Date({date, defaultValue}: DateProps) {
    return <Box sx={{ display: "flex", alignItems: "center" }}>
        <h3 style={{ fontSize: "1rem", lineHeight: "1.5" }}>Datum:</h3>
        <p style={{ fontSize: "1rem", lineHeight: "1.5", paddingLeft: "0.5rem" }}>{date ?? defaultValue}</p>
    </Box>
}

export default Date;