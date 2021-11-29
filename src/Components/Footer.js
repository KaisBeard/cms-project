import React from "react";
import Footerelement from "./Footerelement.js"
function Footer ({importedData}) {
    //const {helloIAmSomeText} = importedData.fields
    
    return(
        <div>
            
            {importedData.fields?.helloIAmSomeText}
            
        </div>
    )

}

export default Footer;
// {importedData.fields.helloIAmSomeText}
//{importedData.helloIAmSomeText}
//{importedData.map((a, b) => <Footerelement importedData={a} key={b}/>)}