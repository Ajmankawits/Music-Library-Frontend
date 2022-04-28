import React, {useState} from 'react'

const AddSong = (props) => {

    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [album, setAlbum] = useState("")
    const [release_date, setRelease_date] = useState("")
    const [genre, setGenre] = useState("")
    const [image, setImage] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre,
            image: image,
        }
        props.createSong(newSong)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
            <label>Artist</label>
            <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <label>Album</label>
            <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <label>Release Date</label>
            <input type="date" value={release_date} onChange={(event) => setRelease_date(event.target.value)}/>
            <label>Genre</label>
            <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)}/>
            <label>Image URL</label>
            <input type="text" value={image} placeholder='If no image URL, type "none"' onChange={(event) => setImage(event.target.value)}/>
            <button type='submit'>Create Song</button>
        </form>
     );
}

export default AddSong; 