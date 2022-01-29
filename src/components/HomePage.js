import React, {useState, useEffect} from 'react';
import {search, CLIENT_ID, CLIENT_SECRET} from '../credentials/spotify';
import axios from 'axios';
import SpotifyWebApi from "spotify-web-api-js"
import SongList from './SongList';

const HomePage = () => {
	const [term, setTerm] = useState('');
	const [token, setToken] = useState('');
	const [songs, setSongs] = useState({});

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

	const onSubmit = (event) => {
		event.preventDefault();

		getToken();

		spotifyApi.searchTracks(term).then(
			function (data) {
		    	console.log(`Search by ${term}`, data.tracks);
		    	setSongs(data.tracks.items)
		  	},
		  	function (err) {
		    	console.error(err);
		  	}
		);
	};

	return (
		<div>
			<h1>Welcome</h1>
			<h3>Search a Song:</h3>
			<div>
				<form onSubmit={onSubmit}>
					<input type="text" onChange={e => setTerm(e.target.value)}/>
					<button>Search</button>
				</form>
			</div>
			<div>
				<SongList songs={songs} />
			</div>
		</div>
	)
}

export default HomePage;