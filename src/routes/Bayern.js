import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { client } from ".././client";
import "./subpages.css";
import generateMap from "../helpers/maplibre"
import maplibregl from "maplibre-gl";


function Bayern() {
  const [pageContent, setPageContent] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    client
      .getEntry("2RjNEbPRej1PUTsqwOoiwL")
      .then((response) => {
        console.log(response);
        setPageContent(response.fields);
        setIsLoading(false);
        generateMap("map-bayern", response.fields.hikingRoute)

      })
      .catch(console.error);
  }, []);

  console.log(pageContent);

  if (isLoading === true) {
    return <div>loading ...</div>;
  }

  const {
    name,
    articleText,
    difficulty,
    distance,
    summitElevation,
    whenToGo,
    timeNeeded,
    image,
    postPicture2,
    postPicture3,
  } = pageContent;

  return (
    <span className="aritcleFrame">
      <article>
        <h1 className="gridElement">{name}</h1>
        <img
          className="articlePicture gridElement"
          src={image.fields.file.url}
        />
        <img
          className="articlePicture gridElement"
          src={postPicture2.fields.file.url}
        />
        <img
          className="articlePicture gridElement"
          src={postPicture3.fields.file.url}
        />
        <div className="articleText gridElement">{articleText}</div>

        <div className="greyBox">
          <h2>Trail details</h2>
          <dl>
            <dt>Summit Elevation:</dt>
            <dd> {summitElevation} m</dd>
            <dt> Distance:</dt>
            <dd> {distance} km</dd>
            <dt> Time: </dt>
            <dd> {timeNeeded} h</dd>
            <dt> Difficulty: </dt>
            <dd> {difficulty}</dd>
            <dt> When to go: </dt>
            <dd> {whenToGo}</dd>
          </dl>
        </div>

      </article>
      <div className="map-libremap-wrapper">
        <div className="map-libremap" id="map-bayern"></div>
      </div>
    </span>
  );
}

export default Bayern;

/*

<span className="gridElement">
 </span>
<div>{name}</div>
            <div>{articleText}</div>
            <div>{difficulty}</div>
            <div>{distance}</div>
            <div>{hikingRoute}</div>
            <div>{summitElevation}</div>
            <div>{whenToGo}</div>
*/
