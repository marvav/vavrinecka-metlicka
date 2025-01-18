import {Box} from "@mui/material";
import {useState} from "react";
import ImageDialog from "../../misc/ImageDialog.tsx";
import TicketDialog from "../../misc/TicketDialog.tsx";
import {ButtonStyle1} from "../../buttons/StyledButtons.tsx";
import {LinkData} from "../../data/LinkData.tsx";

interface EventButtonBarProps {
    pictures: LinkData[];
    photos_url: string | undefined;
    ticket_url: string | undefined;
    areTicketsAvailable: boolean;
}

function EventButtonBar({pictures, photos_url, ticket_url, areTicketsAvailable}: EventButtonBarProps) {
    const [ticketDialogOpen, setTicketDialogOpen] = useState(false);
    const ticketMessage = "Vstupenky bude možné zakoupit na místě nebo skrze náš mail vavrinecka-metlicka@seznam.cz"

    const photosButton = getPhotosButton(photos_url);
    const ticketsButton = getTicketsButton(ticket_url ?? "", setTicketDialogOpen);

    return <Box sx={{display: "flex", gap: "1em"}}>
        {pictures.map(picture => getButton(picture))}
        {photos_url && photosButton}
        {areTicketsAvailable && ticketsButton}
        {TicketDialog(ticketMessage, ticketDialogOpen, setTicketDialogOpen)}
    </Box>
}

function getButton(picture: LinkData) {
    const [pictureDialogOpen, setPictureDialogOpen] = useState(false);
    return <>
        <ButtonStyle1 title={picture.name} onClick={() => {setPictureDialogOpen(true)}}/>
        {ImageDialog(picture.url, pictureDialogOpen, setPictureDialogOpen)}
    </>;
}

function getPhotosButton(photos_url: string | undefined) {
    return <ButtonStyle1 title={"Fotky"} onClick={() => window.open(photos_url ?? "", '_blank')}/>;
}

function getTicketsButton(ticket_url: string, setTicketDialogOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void) {
    return <ButtonStyle1 onClick={
        ticket_url
            ? () => window.open(ticket_url, "_blank")
            : () => {
                setTicketDialogOpen(true);
            }} title={"Vstupenky"}/>;
}

export default EventButtonBar;