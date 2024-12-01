import {Box, Button, styled, useMediaQuery} from "@mui/material";
import {MouseEventHandler, useState} from "react";
import ImageDialog from "../../misc/ImageDialog.tsx";
import article_theme from "./article_theme.ts";
import { TicketLinkButton } from "../../buttons/TicketLinkButtons.tsx";
import TicketDialog from "../../misc/TicketDialog.tsx";

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

const StyledButton = styled(Button)(() => ({
    backgroundColor: "#181a1b",
    border: "1px solid #00A000", // Green border
    textTransform: "none",    // Disable uppercase text
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow
    transition: "all 0.3s ease-in",
    "&:hover": {
        backgroundColor: "#2c2e29", // Light grey on hover
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", // Stronger shadow
    },
}));

interface ArticleButtonProps {
    title: string;
    onClick?: MouseEventHandler | undefined;
}
export function ArticleButton({title, onClick}: ArticleButtonProps) {

    return <StyledButton sx={{width: 'min-content'}} onClick={onClick}>
        {title}
    </StyledButton>
}

export default ArticleButtonBar;