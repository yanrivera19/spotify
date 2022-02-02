import React, {useState, useRef} from 'react';

const TrackList = ({tracks, term}) => {	
	const [itemsToShow, setItemsToShow] = useState(5);
	const [expanded, isExpanded] = useState(false);
	const trackListRef = useRef();

	const renderTracks = tracks.slice(0, itemsToShow).map(track => {
		const {name, id, external_urls, album, duration_ms, artists} = track;

		const msToMinutesAndSeconds = ms => {
			const minutes = Math.floor(ms / 60000);
			const seconds = ((ms % 60000) / 1000).toFixed(0);

			return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
		};

		return (
			<a className="item track-item" key={id} href={external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none'}}>
				<div className="right floated content">
					<div className="description" style={{color:'whiteSmoke', paddingRight: '15px', paddingTop: '8px'}}>{msToMinutesAndSeconds(duration_ms)}</div>
				</div>
				<img className="ui avatar image" alt="track" src={album.images[0].url}/>
				<div className="content">
					<div className="header" style={{color:'whiteSmoke'}}>{name}</div>
					<p className="artist-name description" style={{color:'whiteSmoke', fontSize: '13px' }}>{artists[0].name}</p>
				</div>
			</a>
		);
	});

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
				< button className="ui button compact right floated" style={{fontSize: '13px'}} onClick={showMore}>
				  {expanded ? "SEE LESS" : "SEE MORE"}
				</button>
				<div style={{fontSize: '21px', fontWeight: 'bold'}}>Songs</div>
			</div>
			<div className="ui large divided animated list">
				{renderTracks}
			</div>
			{expanded ? (
				<div style={{paddingBottom: '40px'}}>
					<button className="ui right floated compact button" onClick={showMore} style={{fontSize: '13px'}} >SEE LESS</button>
				</div>
			) : null}
		</>	
	);
};	

export default TrackList;