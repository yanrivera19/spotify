import React from 'react';
import {useParams, useLocation} from 'react-router-dom';

const FullTrackList = () => {
	const {term} = useParams();
	const location = useLocation();
	const {tracks} = location.state;
	console.log(term);
	console.log(tracks)

	const renderTracks = tracks.map(track => {
		const {name, id, external_urls, album, duration_ms, artists} = track;
		return (
			<div className="item" key={id}>
				<div className="right floated content">
					<div>{duration_ms}</div>
				</div>
				<img className="ui avatar image" src={album.images[0].url}/>
				<div className="content">
					<div className="header">{name}</div>
					<a className="artist-name" src={artists[0].external_urls.href}>{artists[0].name}</a>
				</div>
			</div>
		);
	});

	

	return (
		<div className="ui list">
			{renderTracks}
		</div>
	)
}	

export default FullTrackList;