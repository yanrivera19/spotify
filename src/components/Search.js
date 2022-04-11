import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { getToken } from "../token";
import SearchResults from "./SearchResults";
import {motion, AnimatePresence} from "framer-motion";

const Search = () => {
	const [inputValue, setInputValue] = useState("");
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
							value={inputValue}
							type="search"
							autoFocus
							autoComplete="off"
							placeholder="Search for songs, artists, or albums"
							onChange={(e) => setInputValue(e.target.value)}
						/>
					</div>
				</div>
			</form>
		);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		getToken();

		if (inputValue === "") {
			return null;
		} else {
			spotifyApi
				.search(inputValue, ["track", "album", "artist"], {
					limit: 50,
				})
				.then(
					function (data) {
						setSearchedTerm(inputValue);
						setTracks(data.tracks.items);
						setArtists(data.artists.items);
						setAlbums(data.albums.items);
					},
					function (err) {
						console.error(err);
					}
				);
		}

		setInputValue("");
	};

	return (
		<div>
			<AnimatePresence>
				<motion.div
		            initial={{ y: -300, opacity: 0 }}
				    animate={{ y: 0, opacity: 1 }}
				    exit={{ y: 300, opacity: 0 }}
            	>
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
				</motion.div>
			</AnimatePresence>
			
			<SearchResults
				tracks={tracks}
				artists={artists}
				albums={albums}
				term={searchedTerm}
			/>
		
		</div>
	);
};

export default Search;
