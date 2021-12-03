import React from "react";
import {useState} from 'react'

import './post.css'

function Post({ article }) {

    const[isOpen, setIsOpen] = useState(true);
    const {name, image, linkRef,description} = article.fields
    console.log(article.fields);
    return(
        <div className='post'>
            {image && <img className='image' src={image.fields.file.url} alt={name} title={name} /> }
            <div className='title'>
            <button  id= 'collapsebtn' onClick={() => setIsOpen(!isOpen) }> {name} </button>
            <button id='linksbtn' onClick={linkRef}> MORE </button>
            </div>
            <div className={`description ${isOpen ? 'collapsed' : 'expanded'}`} >{description}</div>
            
        </div>
    )
}
export default Post; 

