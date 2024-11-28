import MainBar from "../page/MainBar.tsx";
import React from "react";
import IntroContents from "./IntroContent";

const IntroPage: React.FC = () => {
    return <>
        <MainBar/>
        <IntroContents/>
    </>
}
export default IntroPage;