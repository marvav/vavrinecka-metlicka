import {Box} from "@mui/material";

function Article({ content , date, title}: ArticleData) {
    return (
        <Box sx={{backgroundColor: "initial"}}>
            <h1>{title}</h1>
            <h3>{"Datum: " + (date ?? "Ještě nevíme")}</h3>
            {content}
        </Box>
    );
}

export default Article;