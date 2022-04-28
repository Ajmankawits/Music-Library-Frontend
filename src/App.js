import React, { useState, useEffect} from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable/MusicTable";
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

  return (
    <div className="App">

      <MusicTable songs={songs}/>
    </div>
  );
}


export default App;
