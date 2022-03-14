import React from "react";
import TrackList from "./TrackList";
import ArtistList from "./ArtistList";
import AlbumList from "./AlbumList";

const SearchResults = ({ tracks, artists, albums, term }) => {
	return (
		<div>
			<div
				className="ui inverted segment "
				style={{ marginBottom: "30px" }}
			>
				<TrackList tracks={tracks} term={term} />
			</div>
			<div
				className="ui inverted segment"
				style={{ marginBottom: "30px" }}
			>
				<ArtistList artists={artists} term={term} />
			</div>
			<div
				className="ui inverted segment"
				style={{ marginBottom: "30px" }}
			>
				<AlbumList albums={albums} term={term} />
			</div>
		</div>
	);
};

export default SearchResults;
