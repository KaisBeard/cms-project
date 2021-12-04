import React from "react";
import Post from './Post';



function Posts({ posts }) {
    return (
        <div className="wrapper-post-home">
            {posts.map((article, index) => <Post article={article} key={index}/>)}
        </div>
        
    )
}
export default Posts;