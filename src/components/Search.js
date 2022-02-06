import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { getToken } from "../token";
import SearchResults from "./SearchResults";

const Search = () => {
	const [term, setTerm] = useState("");
	const [searchedTerm, setSearchedTerm] = useState("");
	const [tracks, setTracks] = useState([]);
	const [artists, setArtists] = useState([]);
	const [albums, setAlbums] = useState([]);
	const [isResultsFound, setIsResultsFound] = useState();
	const spotifyApi = new SpotifyWebApi();

	useEffect(() => {
		getToken();
	}, []);

	const renderInput = () => {
		return (
			<form className="ui form" onSubmit={onSubmit} spellCheck="false">
				<div
					className="field term-form"
					style={{ paddingBottom: "10px" }}
				>
					<div className="ui left icon input">
						<i className="search icon"></i>
						<input
							className="term-input"
							value={term}
							type="search"
							autoFocus
							autoComplete="off"
							placeholder="Search for songs, artists, or albums"
							onChange={(e) => setTerm(e.target.value)}
							style={{ fontSize: "19px" }}
						/>
					</div>
				</div>
			</form>
		);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		getToken();

		if (term === "") {
			return null;
		} else {
			spotifyApi
				.search(term, ["track", "album", "artist"], {
					limit: 50,
				})
				.then(
					function (data) {
						setSearchedTerm(term);
						setTracks(data.tracks.items);
						setArtists(data.artists.items);
						setAlbums(data.albums.items);
					},
					function (err) {
						console.error(err);
					}
				);
		}

		if (tracks && artists && albums) {
			setIsResultsFound(true);
		} else {
			setIsResultsFound(false);
		}

		setTerm("");
	};

	return (
		<div>
			{!searchedTerm ? (
				<div
					style={{
						marginTop: "130px",
						paddingBottom: "40px",
						textAlign: "center",
					}}
				>
					<h1 className="home-title" style={{ fontSize: "65px" }}>
						Welcome
					</h1>
				</div>
			) : null}
			<div className={searchedTerm ? "with-search" : "no-search"}>
				{renderInput()}
			</div>
			{isResultsFound && searchedTerm ? (
				<>
					<h2
						className="results-header"
						style={{ paddingBottom: "20px", textAlign: "center" }}
					>
						Results for{" "}
						<span style={{ fontStyle: "italic" }}>
							{searchedTerm}
						</span>
						:
					</h2>
					<SearchResults
						tracks={tracks}
						artists={artists}
						albums={albums}
					/>
				</>
			) : !isResultsFound && searchedTerm ? (
				<h3 style={{ fontSize: "17px" }}>
					Sorry, no results were found.
				</h3>
			) : null}
		</div>
	);
};

export default Search;
