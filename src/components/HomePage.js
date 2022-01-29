import React, {useState, useEffect} from 'react';
import {search, CLIENT_ID, CLIENT_SECRET} from '../credentials/spotify';
import axios from 'axios';
import SpotifyWebApi from "spotify-web-api-js"
import TrackList from './TrackList';
import ArtistList from './ArtistList';
import SearchForm from './SearchForm';
import AlbumList from './AlbumList';

const HomePage = () => {
	const [term, setTerm] = useState('');
	const [token, setToken] = useState('');
	const [tracks, setTracks] = useState([]);
	const [artists, setArtists] = useState([]);
	const [albums, setAlbums] = useState([]);

	const spotifyApi = new SpotifyWebApi();

	const getToken = () => {
		axios('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				 'Content-Type':'application/x-www-form-urlencoded',
				 'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
			},
			data: 'grant_type=client_credentials'
		}).then(response => {
			console.log(response.data.access_token);
			setToken(response.data.access_token);
			spotifyApi.setAccessToken(response.data.access_token)
		}).catch(error => console.log(error));
	}	

	useEffect(() => {
		getToken()
	}, []);

	console.log(term)

	const onSubmit = formValues => {
		// event.preventDefault();
		setTerm(formValues.term);
		getToken();


		spotifyApi.search(formValues.term, ['track','album','artist']).then(
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

	return (
		<div>
			<h1>Welcome</h1>
			<div>
				<SearchForm onSubmit={onSubmit}/>
				{/* <form onSubmit={onSubmit}> */}
				{/* 	<input type="text" onChange={e => setTerm(e.target.value)}/> */}
				{/* 	<button>Search</button> */}
				{/* </form> */}
			</div>
			<div className="ui segment">
				<TrackList tracks={tracks} term={term}/>
			</div>		
			<div className="ui segment" >
				<ArtistList artists={artists} term={term}/>
			</div>
			<div className="ui segment" >
				<AlbumList albums={albums} term={term}/>
			</div>
	
		</div>
	)
}

export default HomePage;