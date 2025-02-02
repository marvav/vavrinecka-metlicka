import {Box, Button} from "@mui/material";
import {MouseEventHandler, useState} from "react";
import ImageDialog from "../../misc/ImageDialog.tsx";
import {ButtonStyle1} from "../../buttons/StyledButtons.tsx";
import {LinkData} from "../../../data/LinkData.tsx";
import {isEventInFuture} from "../EventUtils.tsx";
import {Event} from "../../../data/Event.tsx";
import {Paragraph} from "../../../data/Paragraph.tsx";
import StyledDialog from "../../misc/StyledDialog.tsx";
import StyledDescription from "../../text-components/StyledDescription.tsx";
import Typography from "@mui/material/Typography";

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
        <ButtonStyle1 title={picture.name} onClick={() => {
            setPictureDialogOpen(true)
        }}/>
        {ImageDialog(picture.url, pictureDialogOpen, setPictureDialogOpen)}
    </>;
}

function getLinkButton(link: LinkData) {
    return <ButtonStyle1 title={link.name} onClick={() => window.open(link.url, '_blank')}/>;
}

function getTicketButton(onClick: MouseEventHandler) {
    return <ButtonStyle1 title={"Vstupenky"} onClick={onClick}/>;
}

function TicketDialog(message: Paragraph, open: boolean, setOpen: Function) {
    const handleClose = () => {
        setOpen(false);
    };

    const content = <Box sx={{display: "flex",
        flexDirection: "column",
        padding: "1.5em",
        gap: "1em",
        textAlign: "center"}}>
        <StyledDescription paragraphs={[message]}/>
        <Typography>Vstupenky lze také zakoupit přes náš Facebook a nebo na čísle +420 702 013 740.</Typography>
    </Box>

    return <StyledDialog open={open} setOpen={handleClose} content={content}/>
}

export default EventButtonBar;