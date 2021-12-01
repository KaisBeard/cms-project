import "./footer.css";
import React from "react";
import {useState} from "react";

function Footer ({content}) {
    console.log(content)

    if (!content.length > 0) {
        return <div> loading... </div>;
    };
    
    const {footerLeftColumn, footerCenterColumn, footerRightColumn} = content[5].fields;

    //const footer = content[5]?.fields
    //console.log(footer)
    return <div>{footerLeftColumn}</div>

}

export default Footer;