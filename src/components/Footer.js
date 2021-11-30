import "./footer.css";
import React from "react";
import {useState} from "react";

function Footer (content) {
    const [a, setA] = useState(content.items[2].fields.helloIAmSomeText)
    console.log(a)

    return <div>hello I am some footer</div>

}

export default Footer;