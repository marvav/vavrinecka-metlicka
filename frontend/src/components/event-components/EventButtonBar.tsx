import {Box, Button, Typography} from "@mui/material";
import {MouseEventHandler, useState} from "react";
import ImageDialog from "../misc/ImageDialog.tsx";
import {LinkData} from "../../data/LinkData.tsx";
import {isEventInFuture} from "../../page/event/EventUtils.tsx";
import {Event} from "../../data/Event.tsx";
import {Paragraph} from "../../data/Paragraph.tsx";
import StyledDialog from "../misc/StyledDialog.tsx";
import StyledDescription from "../text-components/StyledDescription.tsx";
import {TypographyStyle1} from "../../styles/TypographyStyles.tsx";
import {ButtonStyle2} from "../../styles/ButtonStyles.tsx";

interface EventButtonBarProps {
    event: Event
}

function EventButtonBar({event}: EventButtonBarProps) {
    const areTicketsBeingSold = isEventInFuture(event) && event.ticketMessage != undefined;
    const [ticketDialogOpen, setTicketDialogOpen] = useState(false);

    return <Box sx={{display: "flex", gap: "0.5em", flexWrap: "wrap"}}>
        {event.pictures.map(picture => getPictureButton(picture))}
        {event.links.map(link => getLinkButton(link))}
        {areTicketsBeingSold && getTicketButton(() => setTicketDialogOpen(true))}
        {areTicketsBeingSold && TicketDialog(event.ticketMessage, ticketDialogOpen, setTicketDialogOpen)}
    </Box>
}

function getPictureButton(picture: LinkData) {
    const [pictureDialogOpen, setPictureDialogOpen] = useState(false);
    return <>
        {StyledButton(picture.name, () => {
            setPictureDialogOpen(true)
        })}
        {ImageDialog(picture.url, pictureDialogOpen, setPictureDialogOpen)}
    </>;
}

function getLinkButton(link: LinkData) {
    return (
        <Button
            component="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={ButtonStyle2}
        >
            <Typography sx={{fontSize: "1em"}}>
                {link.name}
            </Typography>
        </Button>
    );
}

function getTicketButton(onClick: MouseEventHandler) {
    return StyledButton("Vstupenky", onClick);
}

function TicketDialog(message: Paragraph, open: boolean, setOpen: Function) {
    const handleClose = () => {
        setOpen(false);
    };

    const content = <Box sx={{
        ...TypographyStyle1, display: "flex",
        flexDirection: "column",
        padding: "1.5em",
        gap: "1em",
        textAlign: "center"
    }}>
        <StyledDescription paragraphs={[message]}/>
        <Typography>Vstupenky lze také zakoupit přes náš Facebook a nebo na čísle +420 702 013 740.</Typography>
    </Box>

    return <StyledDialog open={open} setOpen={handleClose} content={content}/>
}


function StyledButton(title: string, onClick: MouseEventHandler) {
    return <Button sx={ButtonStyle2} onClick={onClick}>
        <Typography sx={{fontSize: "1em"}}>
            {title}
        </Typography>
    </Button>;
}

export default EventButtonBar;