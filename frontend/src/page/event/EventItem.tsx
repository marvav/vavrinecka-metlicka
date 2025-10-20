import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {TitleStyle3, TypographyStyle1} from "../../styles/TypographyStyles.tsx";
import FieldEntry from "../../components/text-components/FieldEntry.tsx";
import {PrimaryBackground} from "../../styles/ColorDefinitions.ts";
import {translateTitleToUrl} from "./EventUtils.tsx";

interface EventBase {
    id: string | number;
    date: Date;
    title: string;
    place: { name: string };
    banner: string;
}

function EventItem({ id, date, title, place, banner }: EventBase) {
    return (
        <Button
            component={Link}
            to={"/akce/" + translateTitleToUrl(title)}
            variant="outlined"
            sx={{
                ...TypographyStyle1,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textTransform: 'none',
                justifyContent: "flex-start",
                textAlign: 'left',
                padding: "0em",
                borderRadius: "0.75em",
                backgroundColor: PrimaryBackground,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '2px solid transparent',
                transition: 'box-shadow 0.4s ease-out, border-color 0.4s ease-out',
                '&:hover': {
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                    borderColor: 'green',
                    '.zoom-image': {
                        transform: 'scale(1.05)',
                    }
                },
            }}
        >
            <Box sx={{
                width: '100%',
                overflow: 'hidden',
                borderTopLeftRadius: "inherit",
                borderTopRightRadius: "inherit",
            }}>
                <Box
                    className="zoom-image"
                    component="img"
                    src={banner}
                    alt={title}
                    sx={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s ease-in-out',
                    }}
                    loading="lazy"
                />
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                padding: "1em",
                flexGrow: 1,
                width: "100%",
            }}>
                <Typography sx={{...TitleStyle3, textAlign: "left"}}>
                    {title}
                </Typography>
                <Box sx={{flexGrow: 2}}/>
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                }}>
                    <FieldEntry name={"Datum"} value={date.toLocaleDateString('cs-CZ')} defaultValue={"Neoznámeno"}/>
                    <FieldEntry name={"Místo"} value={place.name} defaultValue={"Neoznámeno"}/>
                </Box>
            </Box>
        </Button>
    );
}

export default EventItem;