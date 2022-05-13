import './App.css';
import axios from "axios";
import {useEffect, useRef, useState} from "react";


const App = () => {
    let [path, setPath] = useState("");
    let audioRef = useRef();
    useEffect(() => {
        console.log("useEffect");
        axios.post("https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=AIzaSyB0q6TpkJJPQeHkFiZqWHfq5LCNNWx6kqk", {

            "input":{
                "text":"Hello, world",
            },
            "voice":{
                "languageCode":"en-gb",
                "name":"en-GB-Standard-A",
                "ssmlGender":"FEMALE"
            },
            "audioConfig":{
                "audioEncoding":"MP3"
            }
        }).then(res => {setPath(res.data.audioContent)})
    },[]);

    return (
        <div className="App">
            <h1>Hello, World</h1>
            <h2>With Google Text to Speech</h2>
            <button onClick={() => {
                audioRef.current.play();
            }}>Say Something
            </button>
            <audio ref={audioRef} src={"data:audio/mpeg;base64," + path}></audio>


        </div>
    )
};

export default App;
