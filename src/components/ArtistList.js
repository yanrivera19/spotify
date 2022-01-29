import React from 'react';

const ArtistList = ({artists, term}) => {
	
	const renderArtists = artists.slice(0, 5).map(artist => {
		const {name, images, external_urls, id} = artist;
		console.log(images)
		return (
			<a className="ui card" key={id} href={external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', width: '160px', height: '250px'}}>
				<div className="image">
					{images.length === 0 ? "no images" : (
						<img className="artist-img" src={images[0].url} style={{maxWidth: '160px'}}/>
					)}
				</div>
				<div className="content">
					<div className="header">{name}</div>
					<p>Artist</p>
				</div>
			</a>		
		);
	});

	console.log(artists)

	return (
		<>
			<div className="art-hd" style={{paddingBottom: '30px'}}>
				<div>Artists</div>
				<div>SEE ALL</div>
			</div>		
			<div className="ui cards">
				{renderArtists}
			</div>
		</>
	);
};	

export default ArtistList;