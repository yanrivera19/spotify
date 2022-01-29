import React from 'react';
import {Link} from 'react-router-dom';

const TrackList = ({tracks, term}) => {	
	const renderTracks = tracks.slice(0, 5).map(track => {
		const {name, id, external_urls, album, duration_ms, artists} = track;
		return (
			<a className="item" key={id} href={external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
				<div className="right floated content">
					<div>{duration_ms}</div>
				</div>
				<img className="ui avatar image" src={album.images[0].url}/>
				<div className="content">
					<div className="header">{name}</div>
					<a className="artist-name" src={artists[0].external_urls.href}>{artists[0].name}</a>
				</div>
			</a>
		);
	});

	console.log(tracks)

	return (
		<>
			<div className="art-hd" >
				<div>Songs</div>
				<Link state={{tracks}} to={`/songs/${term}`}>SEE ALL</Link>
			</div>
			<div className="ui list">
				{renderTracks}
			</div>
		</>	
	)
}	

export default TrackList;