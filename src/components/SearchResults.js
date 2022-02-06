import React from "react";
import TrackList from "./TrackList";
import ArtistList from "./ArtistList";
import AlbumList from "./AlbumList";

const SearchResults = ({ tracks, artists, albums }) => {
	return (
		<div>
			<div
				className="ui inverted segment "
				style={{ marginBottom: "30px" }}
			>
				<TrackList tracks={tracks} />
			</div>
			<div
				className="ui inverted segment"
				style={{ marginBottom: "30px" }}
			>
				<ArtistList artists={artists} />
			</div>
			<div
				className="ui inverted segment"
				style={{ marginBottom: "30px" }}
			>
				<AlbumList albums={albums} />
			</div>
		</div>
	);
};

export default SearchResults;
