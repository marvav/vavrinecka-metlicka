import {Box} from "@mui/material";
import {useState} from "react";
import ImageDialog from "../../misc/ImageDialog.tsx";
import TicketDialog from "../../misc/TicketDialog.tsx";
import {EventButton} from "../../buttons/EventButtons.tsx";

interface EventButtonBarProps {
    image: string | undefined;
    photos_url: string | undefined;
    ticket_url: string | undefined;
    areTicketsAvailable: boolean;
}

function EventButtonBar({image, photos_url, ticket_url, areTicketsAvailable}: EventButtonBarProps) {
    const [imageDialogOpen, setImageDialogOpen] = useState(false);
    const [ticketDialogOpen, setTicketDialogOpen] = useState(false);
    const ticketMessage = "Vstupenky bude možné zakoupit na místě nebo skrze náš mail vavrinecka-metlicka@seznam.cz"

    const photosButton = getPhotosButton(photos_url);
    const posterButton = getPosterButton(setImageDialogOpen);
    const ticketsButton = getTicketsButton(ticket_url ?? "", setTicketDialogOpen);
    return <Box sx={{display: "flex", gap: "1em"}}>
        {photos_url && photosButton}
        {posterButton}
        {areTicketsAvailable && ticketsButton}
        {ImageDialog(image, imageDialogOpen, setImageDialogOpen)}
        {TicketDialog(ticketMessage, ticketDialogOpen, setTicketDialogOpen)}
    </Box>
}

function getPhotosButton(photos_url: string | undefined) {
    return <EventButton title={"Fotky"} onClick={() => window.open(photos_url ?? "", '_blank')}/>;
}

function getPosterButton(setImageDialogOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void) {
    return <EventButton title={"Plakát"} onClick={() => {
        setImageDialogOpen(true)
    }}/>;
}

function getTicketsButton(ticket_url: string, setTicketDialogOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void) {
    return <EventButton onClick={
        ticket_url
            ? () => window.open(ticket_url, "_blank")
            : () => {
                setTicketDialogOpen(true);
            }} title={"Vstupenky"}/>;
}

export default EventButtonBar;