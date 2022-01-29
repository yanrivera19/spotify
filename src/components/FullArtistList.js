import React from 'react';

const FullArtistList = ({artists}) => {
	
	const renderArtists = artists.map(artist => {
		const {name, images, external_urls, id} = artist;
		console.log(images)
		return (
			<a key={id} href={external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
				<div className="ui card" style={{width: '160px', height: '250px'}}>
					<div className="image">
						{images.length === 0 ? "no images" : (
							<img className="artist-img" src={images[0].url} style={{maxWidth: '160px'}}/>
						)}
					</div>
					<div className="content">
						<div className="header">{name}</div>
						<p>Artist</p>
					</div>
				</div>
			</a>			
		)
	})

	console.log(artists)

	return (
		<>
		<div className="ui cards">
			{renderArtists}
		</div>
		</>

	)
}	

export default FullArtistList;