import {Box, Button} from "@mui/material";
import React from "react";
import {AffiliateData} from "../../data/AffiliateData.tsx";
import {ImageButtonStyle} from "../../styles/ButtonStyles.tsx";

interface EventAffiliateBarProps {
    affiliates: AffiliateData[];
}

function EventAffiliateBar({affiliates}: EventAffiliateBarProps) {
    return <Box width={{display: "flex", gap: "1em", xs: "40%", sm: "25%"}} paddingTop={"0.5em"}>
        {affiliates.map((affiliate) => (
            <Button sx={{...ImageButtonStyle, width: "auto", bgcolor: "white"}}
                    onClick={() => window.open(affiliate.url ?? "", '_blank')}>
                <img src={affiliate.logo} loading="eager" height={'auto'} width={'100%'} alt={"affiliate"}/>
            </Button>))}
    </Box>;
}

export default EventAffiliateBar;