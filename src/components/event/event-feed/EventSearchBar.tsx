import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import {PrimaryColor} from "../../../styles/ColorDefinitions.ts";
import {Button} from "@mui/material";
import {CheckBoxOutlineBlank, CheckBoxOutlined, Tune} from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {TypographyStyle1} from "../../../styles/TypographyStyles.tsx";

interface SearchBarProps {
    onChange: (query: string, onlyUpcomingEvents: boolean) => void;
}

const EventSearchBar: React.FC<SearchBarProps> = ({onChange}) => {
    const [query, setQuery] = useState("");
    const [onlyUpcomingEvents, setOnlyUpcomingEvents] = useState(false);
    const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        onChange(event.target.value, onlyUpcomingEvents);
    };

    const handleButtonChange = () => {
        setOnlyUpcomingEvents(!onlyUpcomingEvents);
        onChange(query, onlyUpcomingEvents);
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget);
    };

    return <>
        <TextField
            placeholder="Vyhledávání..."
            value={query}
            onInput={handleChange}
            onInputCapture={handleChange}
            fullWidth
            sx={{
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "gray",
                    },
                    "&:hover fieldset": {
                        borderColor: PrimaryColor
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "white",
                    },
                },
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                ),
                endAdornment: (
                    <Button onClick={handleClick}>
                        <Tune/>
                    </Button>
                ),
            }}
        />
        <Menu
            anchorEl={anchorElement}
            open={anchorElement != null}
            onClose={() => setAnchorElement(null)}
        >
            <MenuCheckBox title={"Pouze nadcházející akce"} isTrue={onlyUpcomingEvents} handleClick={handleButtonChange}/>
        </Menu>
    </>
};

interface MenuCheckBoxProps {
    title: string,
    isTrue: boolean
    handleClick: ()=> void
}

const MenuCheckBox: React.FC<MenuCheckBoxProps> = ({title, isTrue, handleClick}) => {
    return <MenuItem sx={{display: "flex", gap: "0.5em"}} onClick={handleClick}>
        {isTrue ? <CheckBoxOutlined/> : <CheckBoxOutlineBlank/>}
        <Typography sx={TypographyStyle1}>
            {title}
        </Typography>
    </MenuItem>
}

export default EventSearchBar;
