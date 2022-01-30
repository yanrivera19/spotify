import React, {useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';

const FullArtistList = () => {
	const {term} = useParams();
	const location = useLocation();
	const {artists} = location.state;

	useEffect(() => {
		window.scrollTo(0, 0);
	});
	
	const renderArtists = artists.map(artist => {
		const {name, images, external_urls, id} = artist;
	
		return (
			<a className="ui card" key={id} href={external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', width: '160px', height: '280px'}}>
				<div className="image">
					{images.length === 0 ? "no images" : (
						<img className="artist-img" src={images[0].url} style={{maxWidth: '160px'}}/>
					)}
				</div>
				<div className="content">
					<div className="header" style={{fontSize: '14px'}}>{name}</div>
					<p style={{fontSize: '13px'}}>Artist</p>
				</div>
			</a>			
		);
	});

	return (
		<>
			<div className="ui cards">
				{renderArtists}
			</div>
		</>
	);
};	

export default FullArtistList;