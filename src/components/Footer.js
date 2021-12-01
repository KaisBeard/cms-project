import "./footer.css";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import React from "react";
function Footer () {
    return( 
        <footer>
            <div className='footerIcons'>
                <span><AiOutlineCopyrightCircle/>takethefirststep</span>
                <FaInstagram className= 'icons' size={40}/>
                <FaFacebook className= 'icons' size={40}/>
                <FaYoutube  className= 'icons' size={40}/>
            </div>
        </footer>
    )

}

export default Footer;
