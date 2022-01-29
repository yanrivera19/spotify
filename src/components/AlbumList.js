import React from 'react';

const AlbumList = ({albums, term}) => {
	
	const renderAlbums = albums.slice(0, 5).map(album => {
		const {name, images, external_urls, id, artists} = album;
		console.log(images)
		return (
			<a className="ui card" key={id} href={external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', width: '160px', height: '250px'}}>
				<div className="image">
					{images.length === 0 ? "no images" : (
						<img className="album-img" src={images[0].url} style={{maxWidth: '160px'}}/>
					)}
				</div>
				<div className="content">
					<div className="header">{name}</div>
					<p>{artists[0].name}</p>
				</div>
			</a>			
		);
	});

	console.log(albums)

	return (
		<>
			<div className="art-hd" style={{paddingBottom: '30px'}}>
				<div>Albums</div>
				<div>SEE ALL</div>
			</div>		
			<div className="ui cards">
				{renderAlbums}
			</div>
		</>
	);
}	

export default AlbumList;