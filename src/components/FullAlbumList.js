import React, {useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';

const FullAlbumList = () => {
	const {term} = useParams();
	const location = useLocation();
	const {albums} = location.state;

	useEffect(() => {
		window.scrollTo(0, 0);
	});
	
	const renderAlbums = albums.map(Album => {
		const {name, images, external_urls, id, artists} = Album;
		console.log(images)
		return (
			<a className="ui card" key={id} href={external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', width: '160px', height: '280px'}}>
				<div className="image">
					{images.length === 0 ? "no images" : (
						<img className="album-img" src={images[0].url} style={{maxWidth: '160px'}}/>
					)}
				</div>
				<div className="content">
					<div className="header" style={{fontSize: '14px'}}>{name}</div>
					<a href={artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontSize: '13px'}}>{artists[0].name}</a>
				</div>
			</a>			
		);
	}); 

	return (
		<>
			<div className="ui cards">
				{renderAlbums}
			</div>
		</>
	);
}	;

export default FullAlbumList;