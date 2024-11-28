import {Box} from "@mui/material";

export interface FieldEntryProps {
    name: string
    value: string | undefined
    defaultValue: string
}

function FieldEntry({name, value, defaultValue}: FieldEntryProps) {
    return <Box sx={{ display: "flex", alignItems: "center" }}>
        <h3 style={{ fontSize: "1rem", lineHeight: "1" }}>{name}</h3>
        <p style={{ fontSize: "1rem", lineHeight: "1", paddingLeft: "0.5rem" }}>{value ?? defaultValue}</p>
    </Box>
}

export default FieldEntry;