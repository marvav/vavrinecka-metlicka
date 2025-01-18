import {Box} from "@mui/material";
import {useState} from "react";
import ImageDialog from "../../misc/ImageDialog.tsx";
import TicketDialog from "../../misc/TicketDialog.tsx";
import {ButtonStyle1} from "../../buttons/StyledButtons.tsx";
import {LinkData} from "../../data/LinkData.tsx";

interface EventButtonBarProps {
    pictures: LinkData[];
    links: LinkData[];
    areTicketsAvailable: boolean;
}

function EventButtonBar({pictures, links, areTicketsAvailable}: EventButtonBarProps) {
    const [ticketDialogOpen, setTicketDialogOpen] = useState(false);
    const ticketMessage = "Vstupenky bude možné zakoupit na místě nebo skrze náš mail vavrinecka-metlicka@seznam.cz"

    const ticketsButton = getTicketsButton("", setTicketDialogOpen);

    return <Box sx={{display: "flex", gap: "1em"}}>
        {pictures.map(picture => getPictureButton(picture))}
        {links.map(link => getLinkButton(link))}
        {areTicketsAvailable && ticketsButton}
        {TicketDialog(ticketMessage, ticketDialogOpen, setTicketDialogOpen)}
    </Box>
}

function getPictureButton(picture: LinkData) {
    const [pictureDialogOpen, setPictureDialogOpen] = useState(false);
    return <>
        <ButtonStyle1 title={picture.name} onClick={() => {setPictureDialogOpen(true)}}/>
        {ImageDialog(picture.url, pictureDialogOpen, setPictureDialogOpen)}
    </>;
}

function getLinkButton(link: LinkData) {
    return <ButtonStyle1 title={link.name} onClick={() => window.open(link.url, '_blank')}/>;
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