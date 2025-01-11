import {Box, Button, useMediaQuery} from "@mui/material";
import React, {useState} from "react";
import ImageDialog from "../../misc/ImageDialog.tsx";
import event_theme from "./event_theme.ts";
import TicketDialog from "../../misc/TicketDialog.tsx";
import {EventButton, EventImageButton} from "../../buttons/EventButtons.tsx";
import {AffiliateData} from "../../data/AffiliateData.tsx";
import Event from "../event-feed/Event.tsx";
import Typography from "@mui/material/Typography";

interface EventAffiliateBarProps {
    affiliates: AffiliateData[];
}

function EventAffiliateBar({affiliates}: EventAffiliateBarProps) {
    return <Box width={{display: "flex", gap: "1em", xs: "40%", sm: "25%"}} paddingTop={"0.5em"}>
        {affiliates.map((affiliate) => (
            <EventImageButton
                image={affiliate.logo}
                onClick={() => window.open(affiliate.url ?? "", '_blank')}
                title={"affiliate"}>
                {affiliate.logo}
            </EventImageButton>))}
    </Box>;
}

export default EventAffiliateBar;