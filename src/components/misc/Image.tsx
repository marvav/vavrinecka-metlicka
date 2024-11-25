import {ImageList, ImageListItem} from "@mui/material";

export interface ArticleImageProps {
    image: string | undefined
}

function ArticleImage({image}: ArticleImageProps) {
    return image ? <ImageList sx={{display: "flex", width: "30%", paddingRight: "2em"}}>
            {image ? <ImageListItem>
                <img
                    src={image}
                    alt={""}
                    loading="lazy"/>
            </ImageListItem> : <div/>}
        </ImageList>
        : <div/>;
}

export default ArticleImage;