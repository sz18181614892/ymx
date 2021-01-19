import "./tabs.css"
import React from "react";
import TabHeader from "./module/Tab-header/Tab-header";
import FooterCom from "../../components/FooterCom/FooterCom";

function tabs() {
    return (
        <div className="tabs-container">
            <TabHeader/>
            <FooterCom/>
        </div>

    )
}

export default tabs