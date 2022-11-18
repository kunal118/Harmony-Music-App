import React from "react";

const SongBox = (props) => {
 console.log(props);
  return (
    <div className="songcard card" style={{ width: "40%" }}>
      <img
        
        src={props.track.albumUrl}
        className="card-img-top songImg"
        alt="..."
        
      />
      <div className="card-body">
        <h6 className="">{props.track.title}</h6>
        <p className="" style = {{color:"grey"}}>{props.track.artist}</p>
        <button
          onClick={() => {
            props.changeSong("https://open.spotify.com/embed/track/"+props.track.id+"?utm_source=generator")
            

            
          }}
          className="song-btn  button-48"
        >
          ▶
        </button>
        
      </div>
    </div>
  );
};

export default SongBox;




