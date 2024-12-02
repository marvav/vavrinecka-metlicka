import {Box, useMediaQuery} from "@mui/material";
import {useState} from "react";
import ImageDialog from "../../misc/ImageDialog.tsx";
import event_theme from "./event_theme.ts";
import TicketDialog from "../../misc/TicketDialog.tsx";
import {EventButton} from "../../buttons/EventButtons.tsx";

interface EventButtonBarProps {
    image: string | undefined;
    photos_url: string | undefined;
    ticket_url: string | undefined;
    areTicketsAvailable: boolean;
}

function EventButtonBar({image, photos_url, ticket_url, areTicketsAvailable}: EventButtonBarProps) {
    const isMobile = useMediaQuery(event_theme.breakpoints.down('lg'));
    const [imageDialogOpen, setImageDialogOpen] = useState(false);
    const [ticketDialogOpen, setTicketDialogOpen] = useState(false);
    const ticketMessage = "Vstupenky bude možné zakoupit na místě nebo na našem mailu vavrinecka.metlicka@seznam.cz"

    return <Box sx={{display: "flex", gap: "1em"}}>
        {photos_url && <EventButton title={"Fotky"} onClick={() => window.open(photos_url ?? "", '_blank')}/>}
        {(image && isMobile) && <EventButton title={"Plakát"} onClick={() => {
            setImageDialogOpen(true)
        }}/>}
        {areTicketsAvailable && <EventButton onClick={
            ticket_url
                ? () => window.open(ticket_url, "_blank")
                : () => {
                    setTicketDialogOpen(true);
                }} title={"Vstupenky"}/>
        }
        {ImageDialog(image, imageDialogOpen, setImageDialogOpen)}
        {TicketDialog(ticketMessage, ticketDialogOpen, setTicketDialogOpen)}
    </Box>
}

export default EventButtonBar;