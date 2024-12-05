import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";

export interface FieldEntryProps {
    name: string
    value: JSX.Element | string | undefined
    defaultValue: string
}

function FieldEntry({name, value, defaultValue}: FieldEntryProps) {
    return <Box sx={{ display: "flex", alignItems: "center", gap: "0.5em", width: "max-content"}}>
        <Typography sx={{fontWeight: "bold"}}>{name+ ": "}</Typography>
        {value ?? defaultValue}
    </Box>
}

export default FieldEntry;