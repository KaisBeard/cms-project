import React from "react";
import {marked} from 'marked';
import {useState} from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import './post.css'

function Post({ article }) {

    const[isOpen, setIsOpen] = useState(true);
    const {name, image, linkRef} = article.fields
    console.log(article.fields);
     const rawRichTextField = article.fields.description;
    return(
        <div className='post'>
            {image && <img className='image' src={image.fields.file.url} alt={name} title={name} /> }
            <div className='title'>
            <button  id= 'collapsebtn' onClick={() => setIsOpen(!isOpen) }> {name} </button>
            <button id='linksbtn' onClick={linkRef}> MORE </button>
            </div>
            <div className={`description ${isOpen ? 'collapsed' : 'expanded'}`} > {documentToHtmlString(rawRichTextField) }</div>
            
        </div>
    )
}
export default Post; 

