import React, {useState, useRef} from 'react';
import {Link} from 'react-router-dom';

const ArtistList = ({artists, term}) => {
	const [itemsToShow, setItemsToShow] = useState(5);
	const [expanded, isExpanded] = useState(false);
	const artistListRef = useRef();
	
	const renderArtists = artists.slice(0, itemsToShow).map(artist => {
		const {name, images, external_urls, id} = artist;
		console.log(images)
		return (
			<a className=" card " key={id} href={external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', maxHeight: '280px', backgroundColor: 'black'}}>
				<div className="image">
					{images.length === 0 ? "no images" : (
						<img className="artist-img" src={images[0].url}/>
					)}
				</div>
				<div className="content">
					<div className="header" style={{fontSize: '14px', color: 'whiteSmoke'}}>{name}</div>
					<p className="description" style={{fontSize: '13px', color: 'whiteSmoke'}}>Artist</p>
				</div>
			</a>		
		);
	});

	console.log(artists)

	const showMore = () => {
		if (itemsToShow === 5) {
			setItemsToShow(artists.length)
			isExpanded(true)
		} else {
			setItemsToShow(5);
			isExpanded(false)
			artistListRef.current.scrollIntoView();
		}
	};

	return (
		<>
			<div className="art-hd" style={{paddingBottom: '40px'}} ref={artistListRef}>
				<button className="ui right floated button" onClick={showMore}>
				  {expanded ? "Show less" : "Show more"}
				</button>
				<div style={{fontSize: '18px'}}>Artists</div>
			</div>		
			<div className="ui five doubling cards">
				{renderArtists}
			</div>
			{expanded ? (
				<div style={{paddingBottom: '40px', paddingTop: '20px'}}>
					<button className="ui right floated button" onClick={showMore} >Show less</button>
				</div>
			) : null}
		</>
	);
};	

export default ArtistList;