import {Box} from "@mui/material";
import {useState} from "react";
import ImageDialog from "../../misc/ImageDialog.tsx";
import TicketDialog from "../../misc/TicketDialog.tsx";
import {ButtonStyle1} from "../../buttons/StyledButtons.tsx";
import {LinkData} from "../../data/LinkData.tsx";

interface EventButtonBarProps {
    pictures: LinkData[];
    links: LinkData[];
}

function EventButtonBar({pictures, links}: EventButtonBarProps) {
    const [ticketDialogOpen, setTicketDialogOpen] = useState(false);
    const ticketMessage = "Vstupenky bude možné zakoupit na místě nebo skrze náš mail vavrinecka-metlicka@seznam.cz"

    return <Box sx={{display: "flex", gap: "1em"}}>
        {pictures.map(picture => getPictureButton(picture))}
        {links.map(link => getLinkButton(link))}
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

export default EventButtonBar;