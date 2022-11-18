import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "./useAuth";
import TrackSearchResult from "./TrackSearchResult";
import Player from "./Player";
import Dashboardcontent from "./Dashboard-content";
const spotifyApi = new SpotifyWebApi({
  clientId: "c539060f36c843d18519b13486895062",
});
const Dashboard = ({ code }) => {
    const accessToken = useAuth(code);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [songSrc, setSongSrc] = useState("https://open.spotify.com/embed/track/1HNkqx9Ahdgi1Ixy2xkKkL?utm_source=generator");
    const [volume,setVolume] = useState("50")

    useEffect(() => {
      // console.log(accessToken);
      if (!accessToken) return;
      spotifyApi.setAccessToken(accessToken);
      console.log("access token set to " + accessToken);
    }, [accessToken]);

    useEffect(() => {
      // console.log(search,accessToken);
      if (!search) return setSearchResults([]);
      if (!accessToken) return;

      spotifyApi.searchTracks(search).then((res) => {
        console.log(res);
        setSearchResults(
          res.body.tracks.items.map((track) => {
            const smallestAlbumImage = track.album.images.reduce(
              (smallest, image) => {
                if (image.height < smallest.height) return image;
                return smallest;
              },
              track.album.images[0]
            );

            return {
              artist: track.artists[0].name,
              title: track.name,
              
              albumUrl: smallestAlbumImage.url,
              id:track.id
            };
          })
        );
      });
    }, [accessToken, search]);

  return (
      <div>
      {/* <Form.Control
        type="search"
        placeholder="Search songs/Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="my-2" style={{ height: "400px" ,overflowY: "auto" }}>
        {searchResults.map((track) => {
          return <TrackSearchResult track={track} key={track.uri} />;
        })}
      </div>
      <div className="">
        <Player accessToken={accessToken} />
      </div> */}
    <Dashboardcontent volume = {volume} setVolume = {setVolume} currentSong = {songSrc} changeSong = {setSongSrc} aToken = {accessToken} svalue = {search} schange = {setSearch} sresults = {searchResults}/>
    
    </div>
    
    
  );
};

export default Dashboard;
