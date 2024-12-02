import {Box, useMediaQuery} from "@mui/material";
import {useState} from "react";
import ImageDialog from "../../misc/ImageDialog.tsx";
import article_theme from "./article_theme.ts";
import TicketDialog from "../../misc/TicketDialog.tsx";
import {ArticleButton} from "../../buttons/ArticleButtons.tsx";

interface ArticleButtonBarProps {
    image: string | undefined;
    photos_url: string | undefined;
    ticket_url : string | undefined;
    areTicketsAvailable : boolean;
}

function ArticleButtonBar({image, photos_url, ticket_url, areTicketsAvailable}: ArticleButtonBarProps) {
    const isMobile = useMediaQuery(article_theme.breakpoints.down('sm'));
    const [imageDialogOpen, setImageDialogOpen] = useState(false);
    const [ticketDialogOpen, setTicketDialogOpen] = useState(false);
    const ticketMessage= "Vstupenky bude možné zakoupit na místě nebo na našem mailu vavrinecka.metlicka@seznam.cz"

    return <Box sx={{display: "flex", gap: "1em"}}>
        {photos_url && <ArticleButton title={"Fotky"} onClick={() => window.open(photos_url ?? "", '_blank')}/>}
        {
            (image && isMobile) ?? <ArticleButton title={"Plakát"} onClick={() => {setImageDialogOpen(true)}}/>
        }
        {areTicketsAvailable && <ArticleButton onClick={
            ticket_url
                ? () => window.open(ticket_url, "_blank")
                : () => {setTicketDialogOpen(true);}} title={"Vstupenky"}/>
        }
        {ImageDialog(image, imageDialogOpen, setImageDialogOpen)}
        {TicketDialog(ticketMessage, ticketDialogOpen, setTicketDialogOpen)}
    </Box>
}

export default ArticleButtonBar;