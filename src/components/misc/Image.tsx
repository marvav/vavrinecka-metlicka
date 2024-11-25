import {ImageList, ImageListItem} from "@mui/material";

export interface ArticleImageProps {
    image: string | undefined
}

function ArticleImage({image}: ArticleImageProps) {
    return <ImageList sx={{display: "flex", width: "25%", justifyItems: "center"}}>
        {image ? <ImageListItem>
            <img
                src={image}
                alt={""}
                loading="lazy"/>
        </ImageListItem> : <div/>}
    </ImageList>;
}

export default ArticleImage;