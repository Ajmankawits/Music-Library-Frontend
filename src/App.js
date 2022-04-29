import React, { useState, useEffect} from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable/MusicTable";
import AddSong from "./Components/AddSong/AddSong"
import SearchBar from "./Components/SearchBar/SearchBar";
//import './App.css';

function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs()
  }, [])

  async function getAllSongs(){
    let response = await axios.get("http://127.0.0.1:8000/music/")
    setSongs(response.data)
  }
  async function createSong(newSong){
    let response = await axios.post("http://127.0.0.1:8000/music/", newSong)
    if(response.status === 201){
      await getAllSongs()
    }
}
  return (
    <div className="App">
      <SearchBar songs={songs} setSongs={setSongs}/>
      <MusicTable songs={songs} getAllSongs={getAllSongs}/>
      <AddSong createSong={createSong}/>
    </div>
  );
}


export default App;
