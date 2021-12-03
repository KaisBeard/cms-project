import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Posts from ".src/components/Posts";
// import { client } from ".src/client";


function Home() {

    // const [articles, setArticles] = useState([]);
    //     useEffect(() => {
    //     client
    //     .getEntries()
    //     .then((response) => {
    //         console.log(response);
    //         setArticles(response.items);
    //     })
    // .catch(console.error);
    // }, []);


    return (
        <div>
            <h2>HOME</h2>
            {/* <Posts posts={articles} /> */}
        </div>
        
    )
   
};

export default Home;