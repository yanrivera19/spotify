import React from 'react';

const SongList = ({songs}) => {

	const renderSongs = songs.map(song => {
		return (
			<div>
				<h4>{song.album.name}</h4>
			</div>
		)
	})

	console.log(songs)

	return (
		<div>
			{renderSongs}
		</div>
	)

}

export default SongList;