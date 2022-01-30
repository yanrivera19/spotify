import React, {useState, useRef} from 'react';
import {Link} from 'react-router-dom';

const TrackList = ({tracks, term}) => {	
	const [itemsToShow, setItemsToShow] = useState(5);
	const [expanded, isExpanded] = useState(false);
	const trackListRef = useRef();

	const renderTracks = tracks.slice(0, itemsToShow).map(track => {
		const {name, id, external_urls, album, duration_ms, artists} = track;

// 		function padTo2Digits(num) {
// 			return num.toString().padStart(2, '0');
// 		}
// 
// 		function convertMsToMinutesSeconds(milliseconds) {
// 			const minutes = Math.floor(milliseconds / 60000);
// 			const seconds = Math.round((milliseconds % 60000) / 1000);
// 
// 			return seconds === 60
// 			? `${minutes + 1}:00`
// 			: `${minutes}:${padTo2Digits(seconds)}`;
// 		}

		const msToMinutesAndSeconds = ms => {
			const minutes = Math.floor(ms / 60000);
			const seconds = ((ms % 60000) / 1000).toFixed(0);

			return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
		};

		return (
			<a className="item" key={id} href={external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none'}}>
				<div className="right floated content">
					<div className="description" style={{color:'whiteSmoke'}}>{msToMinutesAndSeconds(duration_ms)}</div>
				</div>
				<img className="ui avatar image" src={album.images[0].url}/>
				<div className="content">
					<div className="header" style={{color:'whiteSmoke'}}>{name}</div>
					<a className="artist-name description" href={artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color:'whiteSmoke', fontSize: '13px' }}>{artists[0].name}</a>
				</div>
			</a>
		);
	});

	console.log(tracks)

	const showMore = () => {
		if (itemsToShow === 5) {
			setItemsToShow(tracks.length)
			isExpanded(true)
		} else {
			setItemsToShow(5);
			isExpanded(false)
			window.scrollTo(0, 0)
		}
	};

	return (
		<>
			<div style={{paddingBottom:'20px'}} ref={trackListRef}>		
				< button className="ui button right floated" onClick={showMore}>
				  {expanded ? "Show less" : "Show more"}
				</button>
				<div style={{fontSize: '18px'}}>Songs</div>
			</div>
			<div className="ui large divided animated list">
				{renderTracks}
			</div>
			{expanded ? (
				<div style={{paddingBottom: '40px'}}>
					<button className="ui right floated button" onClick={showMore} >Show less</button>
				</div>
			) : null}
		</>	
	);
}	

export default TrackList;