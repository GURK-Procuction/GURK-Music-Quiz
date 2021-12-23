import React, {useState, useEffect} from "react";
import SongInputField from "./SongInputField";
import Button from "../../landingPageSrc/components/Button";
import SelectedSongs from "./SelectedSongs";
import SongSuggestions from "./SongSuggestions";

const SongSelector = (props) => {
    const [songSuggestions, setSongSuggestions] = useState([]);
    const [songName, setSongName] = useState("");
    const getSongSuggestions = () => {
        if(songName.length > 0){
            const url = "http://"+window.location.host+"/api/searchSong/"+songName;
            const fetchSongSuggestions = async () => {
                const result = await fetch(url);
                const data = await result.json();
                if(data.statusCode === 200){
                    setSongSuggestions(data.result);
                } else {
                    setSongSuggestions([]);
                }
            }
            fetchSongSuggestions();
        } else {
            setSongSuggestions([]);
        }
    }
    const onNameChange = (e) => {
        setSongName(e.target.value);
    }
    useEffect(() => {
        const timeoutId = setTimeout(() => getSongSuggestions(), 2000);
        return () => clearTimeout(timeoutId);
    }, [songName]);
    return (
        <div className={"templateContainer"}>
            <div className={"chooseSong-container"}>
                <h1 className={"chooseSongsHeader"}>Choose your songs</h1>
                <h2>Song <span className={"inlineColor-red"}>{props.songs.length}</span> of {props.maxLength}</h2>
                <SongInputField onNameChange={onNameChange} songName={songName}/>
                {songSuggestions.length > 0 && <SongSuggestions songs={songSuggestions} onSongClick={props.onSongClick}/>}
            </div>
            <div className={"selectedSongs-container"}>
                <div className={"selectedSongs"}>
                    <SelectedSongs songs={props.songs}/>
                </div>
            </div>
        </div>
    )
}

export default SongSelector