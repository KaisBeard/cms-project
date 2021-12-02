import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import {client} from ".././client";
import "./subpages.css"

function Bayern() {
    const [pageContent, setPageContent] = useState();
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    client.getEntry('NMZROTlX3lGsn7FZxYs21')
      .then((response) => {
        console.log(response);
        setPageContent(response.fields);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);
    
  console.log(pageContent);

  if (isLoading === true) {
    return <div>loading ...</div>;
  }

  const {name, articleText, difficulty, distance, hikingRoute, summitElevation, whenToGo, timeNeeded} = pageContent;
    
    return (
        <article>
                <h1>{name}</h1>
                <img className="articlePicture"/>
                <img className="articlePicture"/>
                <img className="articlePicture"/>
                <div className="articleText">{articleText}</div> 
                <div>
                    <h2>Trail details</h2>
                    <p>Summit Elevation: {summitElevation}</p>
                    <p> Distance: {distance}</p>
                    <p> Time: {timeNeeded}</p>
                    <p> Difficulty: {difficulty}</p>
                    <p> When to go: {whenToGo}</p>              
                </div>
                <div className="map">here goes the map</div>
                
    </article>
    )
}

export default Bayern;

/*
<div>{name}</div>
            <div>{articleText}</div>
            <div>{difficulty}</div>
            <div>{distance}</div>
            <div>{hikingRoute}</div>
            <div>{summitElevation}</div>
            <div>{whenToGo}</div>
*/ 