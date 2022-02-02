import React, {useState, useRef} from 'react';

const ArtistList = ({artists, term}) => {
	const [itemsToShow, setItemsToShow] = useState(5);
	const [expanded, isExpanded] = useState(false);
	const artistListRef = useRef();
	
	const renderArtists = artists.slice(0, itemsToShow).map(artist => {
		const {name, images, external_urls, id} = artist;
		console.log(images)
		return (
			<a className=" card " key={id} href={external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', backgroundColor: 'black'}}>
				<div className="image">
					{images.length > 0 ? (
						<img className="artist-img" alt="artist" src={images[0].url} style={{maxHeight: '220px'}}/>
					) : (
						<img src="https://img.icons8.com/color/344/no-image.png" alt="no-img"/>
						)
					}
				</div>
				<div className="content">
					<div className="header" style={{ color: 'whiteSmoke'}}>{name}</div>
					<p className="description" style={{color: 'whiteSmoke'}}>Artist</p>
				</div>
			</a>		
		);
	});

	const showMoreOrLess = () => {
		if (itemsToShow === 5) {
			setItemsToShow(artists.length);
			isExpanded(true);
		} else {
			setItemsToShow(5);
			isExpanded(false);			
		}
	};

	const showLess = () => {
		setItemsToShow(5);
		isExpanded(false);	
		artistListRef.current.scrollIntoView({behavior: "smooth" });
	};

	return (
		<>
			<div className="art-hd" style={{paddingBottom: '40px'}} ref={artistListRef}>
				<button className="ui right floated compact button" onClick={showMoreOrLess}>
				  {expanded ? "SEE LESS" : "SEE MORE"}
				</button>
				<div style={{fontSize: '21px', fontWeight: 'bold'}}>Artists</div>
			</div>		
			<div className="ui five doubling cards">
				{renderArtists}
			</div>
			{expanded ? (
				<div style={{paddingBottom: '40px', paddingTop: '20px'}}>
					<button className="ui right floated compact button" onClick={showLess}>SEE LESS</button>
				</div>
			) : null}
		</>
	);
};	

export default ArtistList;