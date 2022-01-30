import React, {useState, useEffect} from 'react';
import SpotifyWebApi from "spotify-web-api-js"
import TrackList from './TrackList';
import ArtistList from './ArtistList';
import SearchForm from './SearchForm';
import AlbumList from './AlbumList';
import {getToken} from './useToken';

const HomePage = () => {
	const [term, setTerm] = useState('');
	const [token, setToken] = useState('');
	const [tracks, setTracks] = useState([]);
	const [artists, setArtists] = useState([]);
	const [albums, setAlbums] = useState([]);

	const spotifyApi = new SpotifyWebApi();

	useEffect(() => {
		getToken();
	}, []);

	console.log(term)

	const onSubmit = formValues => {
		setTerm(formValues.term);
		getToken();

		spotifyApi.search(formValues.term, ['track','album','artist'], {limit: 50}).then(
			function (data) {
		    	console.log(`Search by ${formValues.term}`, data);
		    	setTracks(data.tracks.items);
		    	setArtists(data.artists.items);
		    	setAlbums(data.albums.items);
		  	},
		  	function (err) {
		    	console.error(err);
		  	}
		);
	};

// 	const saveToLocalStorage = () => {
// 		let term;
// 
//     	if (localStorage.getItem("term") === null) {
//     		term = [];
//     	} else {
//     		term = JSON.parse(localStorage.getItem("term"));
//     	}
// 
//     	term.splice(0, 1, formValues);
//     	localStorage.setItem("term", JSON.stringify(term));
// 	}

	return (
		<div>
			<h1>Welcome</h1>
			<div>
				<SearchForm className={!term ? "search-home" : ""} onSubmit={onSubmit}/>
				{/* <form onSubmit={onSubmit}> */}
				{/* 	<input type="text" onChange={e => setTerm(e.target.value)}/> */}
				{/* 	<button>Search</button> */}
				{/* </form> */}
			</div>
			{!term ? null : (
				<>
					<h3 style={{paddingBottom: '15px'}}>{`Results for ${term}:`}</h3>
					<div className="ui inverted segment " style={{marginBottom: '30px'}}>
						<TrackList tracks={tracks} term={term}/>
					</div>		
					<div className="ui inverted segment" style={{marginBottom: '30px'}}>
						<ArtistList artists={artists} term={term}/>
					</div>
					<div className="ui inverted segment" style={{marginBottom: '30px'}}>
						<AlbumList albums={albums} term={term}/>
					</div>
				</>
			)}	
		</div>
	)
}

export default HomePage;