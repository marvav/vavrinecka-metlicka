import {Box, useMediaQuery} from "@mui/material";
import {useState} from "react";
import ImageDialog from "../../misc/ImageDialog.tsx";
import article_theme from "./article_theme.ts";
import { TicketLinkButton } from "../../buttons/TicketLinkButtons.tsx";
import TicketDialog from "../../misc/TicketDialog.tsx";
import { ArticleButton } from "../../buttons/ArticleButtons.tsx";
interface ArticleButtonBarProps {
    image: string | undefined;
    photos_url: string | undefined;
    ticket_url : string | undefined;
    ticket_message : string | undefined;
}

function ArticleButtonBar({image, photos_url, ticket_url, ticket_message}: ArticleButtonBarProps) {
    const isMobile = useMediaQuery(article_theme.breakpoints.down('sm'));
    const [imageDialogOpen, setImageDialogOpen] = useState(false);
    const [ticketDialogOpen, setTicketDialogOpen] = useState(false);
    const showTicketButton = (ticket_message || ticket_url);

    return <Box sx={{display: "flex", gap: "1em"}}>
        {photos_url && <ArticleButton title={"Fotky"} onClick={() => window.open(photos_url ?? "", '_blank')}/>}
        {
            (image && isMobile) 
            ? <ArticleButton title={"Plakát"} onClick={
                () => {setImageDialogOpen(true);}}/> 
            : <div/>
        }
        {ImageDialog(image, imageDialogOpen, setImageDialogOpen)}
        {TicketDialog(ticket_message, ticketDialogOpen, setTicketDialogOpen)}
        {showTicketButton && <TicketLinkButton onClick={
            ticket_url 
            ? () => window.open(ticket_url, "_blank") 
            : () => {setTicketDialogOpen(true);}}/>
        }
    </Box>
}

export default ArticleButtonBar;