import React from 'react';
import {CLIENT_ID, CLIENT_SECRET} from '../credentials/spotify';
import axios from 'axios';
import SpotifyWebApi from "spotify-web-api-js"

export const getToken = () => {
	const spotifyApi = new SpotifyWebApi();

	axios('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			 'Content-Type':'application/x-www-form-urlencoded',
			 'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
		},
		data: 'grant_type=client_credentials'
	}).then(response => {
		console.log(response.data.access_token);
		spotifyApi.setAccessToken(response.data.access_token)
	}).catch(error => console.log(error));

}	