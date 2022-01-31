import React, {useState, useEffect} from 'react';
import SpotifyWebApi from "spotify-web-api-js"
import TrackList from './TrackList';
import ArtistList from './ArtistList';
import SearchForm from './SearchForm';
import AlbumList from './AlbumList';
import {getToken} from './useToken';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
	const [term, setTerm] = useState('');
	const [token, setToken] = useState('');
	const [tracks, setTracks] = useState([]);
	const [artists, setArtists] = useState([]);
	const [albums, setAlbums] = useState([]);
	const navigate = useNavigate();

	const spotifyApi = new SpotifyWebApi();

	useEffect(() => {
		getToken();
	}, []);

	console.log(term)

	const onSubmit = formValues => {
		setTerm(formValues);
		getToken();


		spotifyApi.search(formValues, ['track','album','artist'], {limit: 50}).then(
			function (data) {
		    	console.log(`Search by ${formValues}`, data);
		    	setTracks(data.tracks.items);
		    	setArtists(data.artists.items);
		    	setAlbums(data.albums.items);
		    	localStorage.setItem("track", JSON.stringify(data.tracks.items))
		    	localStorage.setItem("artist", JSON.stringify(data.artists.items))
		    	localStorage.setItem("album", JSON.stringify(data.albums.items))
		    	// console.log(tracks)
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
				<h1 style={{fontSize: '60px'}}>Welcome</h1>
			</div>			
			<div className="search-home">
				<SearchForm onSubmit={onSubmit}/>
				{/* <form onSubmit={onSubmit}> */}
				{/* 	<input type="text" onChange={e => setTerm(e.target.value)}/> */}
				{/* 	<button>Search</button> */}
				{/* </form> */}
			</div>
			{/* {!term ? null : ( */}
			{/* 	<> */}
			{/* 		<h3 style={{paddingBottom: '15px'}}>{`Results for ${term}:`}</h3> */}
			{/* 		<div className="ui inverted segment " style={{marginBottom: '30px'}}> */}
			{/* 			<TrackList tracks={tracks} term={term}/> */}
			{/* 		</div>		 */}
			{/* 		<div className="ui inverted segment" style={{marginBottom: '30px'}}> */}
			{/* 			<ArtistList artists={artists} term={term}/> */}
			{/* 		</div> */}
			{/* 		<div className="ui inverted segment" style={{marginBottom: '30px'}}> */}
			{/* 			<AlbumList albums={albums} term={term}/> */}
			{/* 		</div> */}
			{/* 	</> */}
			{/* )}	 */}
		</div>
	)
}

export default HomePage;