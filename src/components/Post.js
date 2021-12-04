import React from "react";
import {useState} from 'react'

import './post.css'

function Post({ article }) {

    const {name, image, linkRef,description} = article.fields
    console.log(article.fields);
    return(
        <div className='post'>
            {image && <img className='image' src={image.fields.file.url} alt={name} title={name} /> }
            <div className='title'>
            <button  id= 'collapsebtn' > {name} </button>
            <a href={linkRef}> <button id='linksbtn' onClick={linkRef}> MORE </button> </a>
            </div>
            <div className="description">{description}</div>
            
        </div>
    )
}
export default Post; 

