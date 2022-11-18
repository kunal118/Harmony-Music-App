import React, { useState } from "react";
import "./css/dashboard.css";
import "./css/Like.css";
import Player from "./Player";
import SongBox from "./SongBox";
import { useEffect } from "react";
import Like from "./Like";
import Volume from "./Volume";
const Dashboardcontent = (props) => {
  // console.log(document.getElementById("splayer"));
  setTimeout(() => {
    console.log(document.querySelectorAll("button"));
    console.log("<title>Spotify | Photograph</title>");
    console.log(document.querySelectorAll("button"));
  }, 7000);

  return (
    <div className="wrapper1">
      <div className="wrapper1-1">
        <ul>
          <li>Item1</li>
          <li>Item1</li>
          <li>Item1</li>
          <li>Item1</li>
        </ul>
      </div>
      <div className="wrapper1-2">
        <div className="wrapper1-2-1">
          <div className="searchbar button-15">
            <input
              className="searchbox"
              id="exampleFormControlInput1"
              value={props.svalue}
              onChange={(e) => props.schange(e.target.value)}
            />
          </div>
        </div>
        <div className="wrapper1-2-2">
          <div className="wrapper1-2-2-1">
            <div className="wrapper1-2-2-1-1">
              {/* "https://open.spotify.com/embed/track/6o027l399OQ5IadRrsRb31?utm_source=generator" */}
              {props.sresults.map((track) => {
                return <SongBox changeSong={props.changeSong} track={track} />;
              })}
            </div>

            <div className="wrapper1-2-2-1-2">
              <iframe
                id="splayer"
                className="songPlayer"
                src={props.currentSong}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="wrapper1-2-2-2">
            <div className="wrapper1-2-2-2-1">
              <Like />
            </div>
            <div className="wrapper1-2-2-2-2">
              <Volume volume={props.volume} setVolume={props.setVolume} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  {
    /* return <Player accessToken={1} style = {{height:"200px"}}/ > */
  }
};

export default Dashboardcontent;
