import React from 'react';

const FullAlbumList = ({albums}) => {
	
	const renderAlbums = albums.map(Album => {
		const {name, images, external_urls, id} = Album;
		console.log(images)
		return (
			<a key={id} href={external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
				<div className="ui card" style={{width: '160px', height: '250px'}}>
					<div className="image">
						{images.length === 0 ? "no images" : (
							<img className="album-img" src={images[0].url} style={{maxWidth: '160px'}}/>
						)}
					</div>
					<div className="content">
						<div className="header">{name}</div>
						<p>Album</p>
					</div>
				</div>
			</a>			
		)
	})
// 
// 	console.log(Albums)

	return (
		<>
		<div className="ui cards">
			{renderAlbums}
		</div>
		</>

	)
}	

export default FullAlbumList;