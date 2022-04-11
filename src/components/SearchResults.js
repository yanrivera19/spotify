import React from "react";
import TrackList from "./TrackList";
import ArtistList from "./ArtistList";
import AlbumList from "./AlbumList";
import {motion, AnimatePresence} from "framer-motion";

const SearchResults = ({ tracks, artists, albums, term }) => {
	return (
		<div>
			{tracks.length > 0 && term ? (
				<>
					<h2
						className="results-header"
						style={{ paddingBottom: "20px", paddingTop: "20px", textAlign: "center" }}
					>
						Results for{" "}
						<span style={{ fontStyle: "italic" }}>
							{term}
						</span>
						:
					</h2>
					<AnimatePresence>
						<motion.div
				            initial={{ y: 300, opacity: 0 }}
						    animate={{ y: 0, opacity: 1 }}
						    transition={{duration: 0.3}}
		            	>
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
						</motion.div>
					</AnimatePresence>
				</>
			) : tracks.length === 0 && term ? (
				<h3
					className="results-header"
					style={{
						textAlign: "center",
						paddingBottom: "40px",
					}}
				>
					Sorry, no results were found.
				</h3>
			) : null}
		</div>
	);
};

export default SearchResults;
