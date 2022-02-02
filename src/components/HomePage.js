import React, {useState, useEffect} from 'react';
import SpotifyWebApi from "spotify-web-api-js"
import SearchForm from './SearchForm';
import {getToken} from '../token';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
	const [term, setTerm] = useState('');
	const navigate = useNavigate();
	const spotifyApi = new SpotifyWebApi();

	useEffect(() => {
		getToken();
	}, []);

	const onSubmit = formValues => {
		setTerm(formValues);
		getToken();

		spotifyApi.search(formValues, ['track','album','artist'], {limit: 50}).then(
			function (data) {
		    	localStorage.setItem("track", JSON.stringify(data.tracks.items))
		    	localStorage.setItem("artist", JSON.stringify(data.artists.items))
		    	localStorage.setItem("album", JSON.stringify(data.albums.items))
		    	navigate(`/${formValues}`)
		  	},
		  	function (err) {
		    	console.error(err);
		  	}
		);
	};

	return (
		<div>
			<div style={{marginTop: '130px', textAlign: 'center'}}>
				<h1 className="home-title" style={{fontSize: '65px'}}>Welcome</h1>
			</div>			
			<div className="search-home">
				<SearchForm initialValues={{term: term}} onSubmit={onSubmit}/>
			</div>			
		</div>
	);
};

export default HomePage;