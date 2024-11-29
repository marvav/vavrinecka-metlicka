import {ArticleButton} from "../article-page/articles/ArticleButtonBar.tsx";

export interface TrackChooserProps {
    tracks: Map<number, string>
}

function TrackChooser({tracks}: TrackChooserProps) {
    return <>
        {Array.from(tracks.entries())
            .map(([key, value]) => (
                <ArticleButton onClick={() => window.open(value ?? "", '_blank')} title={""+key + "km"}/>
            ))}
    </>
}


export default TrackChooser;