import React, { useState } from 'react';

const SearchBar = (props) => {

    const [searchField, setSearchField] = useState("")
    const [searchResults, setSearchResults] = useState([])
    

    function handleChange(event){
        event.preventDefault()
        const filteredSongs = props.songs.filter((song) => {
            return (
                song.title.toLowerCase().includes(searchField.toLowerCase()) ||
                song.artist.toLowerCase().includes(searchField.toLowerCase()) ||
                song.album.toLowerCase().includes(searchField.toLowerCase()) ||
                song.release_date.toLowerCase().includes(searchField.toLowerCase()) ||
                song.genre.toLowerCase().includes(searchField.toLowerCase())
            )
        })
        setSearchResults(filteredSongs)
        if(searchField.length > 0){
            props.setSongs(searchResults)
        }
    }

    return ( 
        <form onSubmit={handleChange}>
            <h3>Search For Your Song</h3>
            <input type="search" placeholder='search song' value={searchField} onChange={event => setSearchField(event.target.value)}/>
            <button type='submit'>Click twice to search</button>
        </form>
     );
}
 
export default SearchBar;