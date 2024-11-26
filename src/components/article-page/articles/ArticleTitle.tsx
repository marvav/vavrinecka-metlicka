import Typography from "@mui/material/Typography";
import {useMediaQuery} from "@mui/material";
import articleTheme from "../../../themes/ArticleTheme.ts";

interface ArticleTitleProps {
    title: string;
}

function ArticleTitle({title}: ArticleTitleProps) {
    const isMobile = useMediaQuery(articleTheme.breakpoints.down('sm'));
    const variant = isMobile ? "h5" : "h3";
    return <Typography variant={variant}
                       sx={{
                           display: "flex",
                           justifyContent: {
                               xs: "center", sm: "left",
                           },
                           textAlign: {
                               xs: "center", sm: "left",
                           }
                       }}>
        {title}
    </Typography>;
}

export default ArticleTitle;