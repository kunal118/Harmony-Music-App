import React, { useEffect, useState } from 'react';
import { Container ,Form} from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node'
import useAuth from "./useAuth"
import TrackSearchResult from './TrackSearchResult';
import Player from './Player';
const spotifyApi = new SpotifyWebApi({
    clientId: 'c539060f36c843d18519b13486895062'

});
const Dashboard = ({code}) => {
    const accessToken  = useAuth(code)
    const [search,setSearch] = useState("");
    const [searchResults,setSearchResults] = useState([]);
    
    useEffect(() => {
        // console.log(accessToken);
        if(!accessToken)return;
        spotifyApi.setAccessToken(accessToken)
        console.log("access token set to " + accessToken);
        }, [accessToken])
    

    useEffect(() => {
        // console.log(search,accessToken);
        if(!search)return setSearchResults([]);
        if(!accessToken) return ;
       
        
        
        spotifyApi.searchTracks(search).then((res) => {  

            console.log(res)
            setSearchResults(
            res.body.tracks.items.map(track =>{
                const smallestAlbumImage = track.album.images.reduce(
                    (smallest,image)=>{
                        if(image.height < smallest.height)return image
                        return smallest
                    },track.album.images[0])
                    
                return {
                    artist:track.artists[0].name,
                    title :track.name,
                    uri:track.uri,
                    albumUrl:smallestAlbumImage.url
                }
            })
            ) 
        }) 
        
        }, [accessToken,search]);


    
    return (
       <Container className = 'd-flex flex-column py-4' style = {{height: '100vh'}} >
        
        <Form.Control type = "search" placeholder = "Search songs/Artists" value={search}  onChange={e =>setSearch(e.target.value)} / >
        <div className = 'flex-grow-1 my-2' style = {{overflowY:'auto'}}>
            {searchResults.map(track =>{
                return <TrackSearchResult track = {track} key = {track.uri}/>
            })}
        </div>
        <div className=''><Player accessToken={accessToken}/></div>

       </Container>
    
        
    );
}

export default Dashboard;