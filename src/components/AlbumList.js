import React, {useState, useRef} from 'react';

const AlbumList = ({albums, term}) => {
	const [itemsToShow, setItemsToShow] = useState(5);
	const [expanded, isExpanded] = useState(false);
	const albumListRef = useRef();
	
	const renderAlbums = albums.slice(0, itemsToShow).map(album => {
		const {name, images, external_urls, id, artists} = album;
		console.log(images)
		return (
			<a className="card" key={id} href={external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', backgroundColor: 'black'}}>
				<div className="image">
					{images.length > 0 ? (
						<img className="album-img" alt="album" src={images[0].url} style={{maxHeight: '220px'}}/>
					) : (
						<img src="https://img.icons8.com/color/344/no-image.png" alt="no-img"/>
						)
					}
				</div>
				<div className="content">
					<div className="header" style={{color: 'whiteSmoke'}}>{name}</div>
					<p className="description" style={{color: 'whiteSmoke'}}>{artists[0].name}</p>
				</div>
			</a>			
		);
	});

	const showMore = () => {
		if (itemsToShow === 5) {
			setItemsToShow(albums.length)
			isExpanded(true)
		} else {
			setItemsToShow(5);
			isExpanded(false)
			albumListRef.current.scrollIntoView({behavior: "smooth" });
		}
	};

	return (
		<div >
			<div className="art-hd" style={{paddingBottom: '40px'}} ref={albumListRef}>
				<button className="ui right floated compact button" onClick={showMore}>
				  {expanded ? "SEE LESS" : "SEE MORE"}
				</button>
				<div style={{fontSize: '21px', fontWeight: 'bold'}}>Albums</div>
			</div>		
			<div className="ui doubling five cards">
				{renderAlbums}
			</div>
			{expanded ? (
				<div style={{paddingBottom: '40px', paddingTop: '20px'}}>
					<button className="ui right floated compact button" onClick={showMore}>SEE LESS</button>
				</div>
			) : null}
		</div>
	);
};	

export default AlbumList;