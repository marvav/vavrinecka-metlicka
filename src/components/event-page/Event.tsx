import {Box, ThemeProvider, useMediaQuery} from "@mui/material";
import {EventData} from "../data/EventData.tsx";

import ArticleImage from "../misc/Image.tsx";
import article_theme from "./event-components/article_theme.ts";
import EventTitle from "./event-components/EventTitle.tsx";
import ArticleFields from "./event-components/ArticleFields.tsx";
import ArticleButtonBar from "./event-components/ArticleButtonBar.tsx";
import LinkBar from "../misc/LinkBar.tsx";

export default Event;

function Event({content, date, title, place, ticket_link, place_link, image,
                     time, photos_url, tracks}: EventData) {
    const isMobile = useMediaQuery(article_theme.breakpoints.down('sm'));
    return <ThemeProvider theme={article_theme}>
        <Box sx={{
            display: "flex",
            flexDirection: {xs: 'column', sm: 'row',},
            bgcolor: 'background.default',
            borderStyle: "outset",
            borderWidth: "2px",
            borderColor: "#00A000",
            padding: {xs: article_theme.spacing(4), sm: article_theme.spacing(8)},
            borderRadius: "0.75em"
        }}>
            <Box sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                paddingRight: {xs: 0, sm: article_theme.spacing(8)}
            }}>
                <EventTitle title={title}/>
                <ArticleFields date={date} time={time} place={place} placeLink={place_link}/>
                {tracks && <LinkBar title={"Trasy"} linkMap={tracks}/>}
                <h3>Popis akce:</h3>
                {content || "Bude upřesněno"}
                <Box sx={{flexGrow: 2, paddingBottom: "1em"}}/>
                <ArticleButtonBar image={image} photos_url={photos_url} ticket_url={ticket_link}
                                  areTicketsAvailable={date >= new Date()}/>
            </Box>
            {
                (image && !isMobile) ? <Box sx={{
                    display: "flex",
                    width: {xs: "100%", sm: "50%",},
                    justifyContent: {xs: "center", sm: "right",},
                    paddingTop: {xs: article_theme.spacing(4), sm: 0,}
                }}>
                    <ArticleImage image={image}/>
                </Box> : <div/>
            }
        </Box>
    </ThemeProvider>;
}
