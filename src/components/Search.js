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
					<div
						className="ui left icon input"
						style={{ fontSize: "19px" }}
					>
						<i
							className="search icon search-icon"
							style={{ marginRight: "30%" }}
						></i>
						<input
							className="term-input"
							value={term}
							type="search"
							autoFocus
							autoComplete="off"
							placeholder="Search for songs, artists, or albums"
							onChange={(e) => setTerm(e.target.value)}
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

		setTerm("");
	};

	return (
		<div>
			{!searchedTerm ? (
				<div
					style={{
						marginTop: "110px",
						paddingBottom: "40px",
						textAlign: "center",
					}}
				>
					<h1 className="home-title">Welcome</h1>
				</div>
			) : null}
			<div className={searchedTerm ? "with-results" : "no-results"}>
				{renderInput()}
			</div>
			{tracks.length > 0 && searchedTerm ? (
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
						term={searchedTerm}
					/>
				</>
			) : tracks.length === 0 && searchedTerm ? (
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

export default Search;
