import React, {useState, useEffect} from 'react';
import {search, CLIENT_ID, CLIENT_SECRET} from '../credentials/spotify';
import axios from 'axios';

const HomePage = () => {
	const [term, setTerm] = useState('');
	const [token, setToken] = useState('');
	const [songs, setSongs] = useState({});

	useEffect(() => {
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

		}).catch(error => console.log(error));		
	}, []);	


	const getSong = () => {
		if(token) {
			axios("https://api.spotify.com/v1/search?q=happy&type=track", {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',					
					'Authorization': 'Bearer' + token				
				},
			}).then(response => {
				console.log(response.data)
			}).catch(error => console.log(error))
		}
	}

	return (
		<div>
			<h1>Welcome</h1>
			<h3>Search a Song:</h3>
			<button onClick={getSong}>Button</button>
			<div>
				<form>
					<input type="text" onChange={e => setTerm(e.target.value)}/>
					<button>Search</button>
				</form>
			</div>
		</div>
	)
}

export default HomePage;