import {Box, ImageList, ImageListItem} from "@mui/material";
import {ArticleData} from "../data/ArticeData.tsx";
import Date from "../misc/Date.tsx";
import Place from "../misc/Place.tsx";
import ArticleImage from "../misc/Image.tsx";

function Article({content, date, title, place, image}: ArticleData) {
    return (
        <Box sx={{
            backgroundColor: "initial",
            display: "flex",
            gap: "1em",
            bgcolor: "#403f3a",
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
            paddingBottom: "1.5em",
            paddingTop: "0.55em",
            borderRadius: "1em"
        }}>
            <Box sx={{width: "70%"}}>
                <h1>{title}</h1>
                <Box sx={{flexGrow: 3, display: "flex", gap: "2em", width: "100%"}}>
                    <Date date={date} defaultValue={"Neoznámeno"}/>
                    <Place place={place} defaultValue={"Neoznámeno"}/>
                </Box>
                {content}
            </Box>
            <ArticleImage image={image}/>
        </Box>
    );
}

export default Article;