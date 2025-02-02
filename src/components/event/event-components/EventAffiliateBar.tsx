import {Box} from "@mui/material";
import React from "react";
import {ImageButton} from "../../buttons/StyledButtons.tsx";
import {AffiliateData} from "../../../data/AffiliateData.tsx";

interface EventAffiliateBarProps {
    affiliates: AffiliateData[];
}

function EventAffiliateBar({affiliates}: EventAffiliateBarProps) {
    return <Box width={{display: "flex", gap: "1em", xs: "40%", sm: "25%"}} paddingTop={"0.5em"}>
        {affiliates.map((affiliate) => (
            <ImageButton
                image={affiliate.logo}
                onClick={() => window.open(affiliate.url ?? "", '_blank')}
                title={"affiliate"}>
                {affiliate.logo}
            </ImageButton>))}
    </Box>;
}

export default EventAffiliateBar;