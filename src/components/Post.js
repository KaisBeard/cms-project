import React from "react";
import {marked} from 'marked';
import {useState} from 'react'


function Post({ article }) {

    const[isOpen, setIsOpen] = useState(false);
    const {name, description, image} = article.fields
    const postDescription = marked(description);
    return(
        <div className='post'>
            {image && <img className='image' src={image.fields.file.url} alt={name} title={name} /> }
            <button className='title' onClick={() => setIsOpen(!isOpen) }> {name} </button>
            <div className={`description ${isOpen ? 'collapsed' : 'expanded'}`}  dangerouslySetInnerHTML={ {__html: postDescription } }/>
        </div>
    )
}
export default Post; 

