import React, { useState } from 'react';

const MusicTable = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Likes</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {props.songs.map((song, index) => {
                    return (
                        <tr key={index}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td>{song.likes}</td>
                            <td>{song.image}</td>
                            <button>Delete Filler</button>
                            <button>Edit Filler</button>
                        </tr>
                    )
                })}
            </tbody>
        </table>
     );
}

export default MusicTable; 