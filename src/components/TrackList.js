import React, { useState, useEffect, useRef } from "react";

const TrackList = ({ tracks, term }) => {
	const [itemsToShow, setItemsToShow] = useState(5);
	const [expanded, isExpanded] = useState(false);
	const trackListRef = useRef();

	useEffect(() => {
		setItemsToShow(5);
		isExpanded(false);
	}, [term]);

	const msToMinutesAndSeconds = (ms) => {
		const minutes = Math.floor(ms / 60000);
		const seconds = ((ms % 60000) / 1000).toFixed(0);

		return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
	};

	const renderTracks = tracks.slice(0, itemsToShow).map((track) => {
		const { name, id, external_urls, album, duration_ms, artists } = track;		

		return (
			<a
				className="item track-item"
				key={id}
				href={external_urls.spotify}
				target="_blank"
				rel="noopener noreferrer"
				style={{ textDecoration: "none" }}
			>
				<div className="right floated content">
					<div
						className="duration"
						style={{
							color: "whiteSmoke",
							paddingRight: "15px",
							paddingTop: "8px",
						}}
					>
						{msToMinutesAndSeconds(duration_ms)}
					</div>
				</div>
				<img
					className="ui avatar image"
					alt="track"
					src={album.images[0].url}
				/>
				<div className="content">
					<div
						className="header track-name truncated"
						style={{ color: "whiteSmoke" }}
					>
						{name}
					</div>
					<p
						className="description track-artist"
						style={{ color: "whiteSmoke" }}
					>
						{artists[0].name}
					</p>
				</div>
			</a>
		);
	});

	//This function is used to deal with the 'SEE MORE' and 'SEE LESS' buttons:

	const showMoreOrLess = () => {
		if (itemsToShow === 5) {
			setItemsToShow(tracks.length);
			isExpanded(true);
		} else {
			setItemsToShow(5);
			isExpanded(false);
			trackListRef.current.scrollIntoView({
				block: "end",
				behavior: "smooth",
			});
		}
	};

	return (
		<>
			<div style={{ paddingBottom: "20px" }} ref={trackListRef}>
				<button
					className="ui button compact right floated see-btn"
					onClick={showMoreOrLess}
				>
					{expanded ? "SEE LESS" : "SEE MORE"}
				</button>
				<div
					className="songs-header"
					style={{ fontSize: "21px", fontWeight: "bold" }}
				>
					Songs
				</div>
			</div>
			<div className="ui large divided animated list">{renderTracks}</div>
			{expanded ? (
				<div style={{ paddingBottom: "40px" }}>
					<button
						className="ui right floated compact button see-btn"
						onClick={showMoreOrLess}
					>
						SEE LESS
					</button>
				</div>
			) : null}
		</>
	);
};

export default TrackList;
