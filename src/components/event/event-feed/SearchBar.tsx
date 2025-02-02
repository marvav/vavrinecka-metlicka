import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import {PrimaryColor} from "../../../styles/ColorDefinitions.ts";
import {Button} from "@mui/material";
import {Settings} from "@mui/icons-material";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <TextField
            placeholder="Vyhledávání..."
            value={query}
            onChange={handleChange}
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
                        <SearchIcon />
                    </InputAdornment>
                ),
                endAdornment: (
                    <Button>
                        <Settings/>
                    </Button>
                ),
            }}
        />
    );
};

export default SearchBar;
