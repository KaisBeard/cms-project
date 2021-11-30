import React from "react";
import {marked} from 'marked';
import {useState} from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


function Post({ article }) {

    const[isOpen, setIsOpen] = useState(true);
    const {name, image} = article.fields
    console.log(article.fields);
    //  const postDescription = marked(description);
     const rawRichTextField = article.fields.description;
    return(
        <div className='post'>
            {image && <img className='image' src={image.fields.file.url} alt={name} title={name} /> }
            <button className='title' onClick={() => setIsOpen(!isOpen) }> {name} </button>
            <div className={`description ${isOpen ? 'collapsed' : 'expanded'}`} > {documentToHtmlString(rawRichTextField) }</div>
            
        </div>
    )
}
export default Post; 

