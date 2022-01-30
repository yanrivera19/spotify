import React, {useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';

const FullTrackList = () => {
	const {term} = useParams();
	const location = useLocation();
	const {tracks} = location.state;
	console.log(term);
	console.log(tracks)

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	const renderTracks = tracks.map(track => {
		const {name, id, external_urls, album, duration_ms, artists} = track;
		return (
			<a className="item" key={id} href={external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
				<div className="right floated content">
					<div className="description">{duration_ms}</div>
				</div>
				<img className="ui avatar image" src={album.images[0].url}/>
				<div className="content">
					<div className="header">{name}</div>
					<a className="artist-name description" href={artists[0].external_urls.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{artists[0].name}</a>
				</div>
			</a>
		);
	});

	

	return (
		<div className="ui large divided animated list">
			{renderTracks}
		</div>
	)
}	

export default FullTrackList;