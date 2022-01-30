// import React, {useState, useEffect} from 'react';
// import SpotifyWebApi from "spotify-web-api-js"
// import TrackList from './TrackList';
// import ArtistList from './ArtistList';
// import SearchForm from './SearchForm';
// import AlbumList from './AlbumList';
// import {getToken} from './useToken';
// import {useLocation, useParams} from 'react-router-dom';
// 
// const SearchedTerm = () => {
// 	const location = useLocation();
// 	const {tracks, artists, albums, term} = location.state;
// 	// const searchTerm = useParams();
// 	console.log(tracks)
// 
// 	const [searchTerm, setSearchTerm] = useState('');
// 	const [token, setToken] = useState('');
// 	const [searchTracks, setSearchTracks] = useState([]);
// 	const [searchArtists, setSearchArtists] = useState([]);
// 	const [searchAlbums, setSearchAlbums] = useState([]);
// 
// 	const spotifyApi = new SpotifyWebApi();
// 
// 	useEffect(() => {
// 		getToken();
// 		setSearchTerm(term);
// 		setSearchTracks(tracks);
// 		setSearchArtists(artists);
// 		setSearchAlbums(albums);
// 	}, []);
// 
// 	// console.log(term)
// 
// 	const onSubmit = formValues => {
// 		setSearchTerm(formValues.term);
// 		getToken();
// 
// 		spotifyApi.search(formValues.term, ['track','album','artist']).then(
// 			function (data) {
// 		    	console.log(`Search by ${formValues.term}`, data);
// 		    	setSearchTracks(data.tracks.items);
// 		    	setSearchArtists(data.artists.items);
// 		    	setSearchAlbums(data.albums.items);
// 		  	},
// 		  	function (err) {
// 		    	console.error(err);
// 		  	}
// 		);
// 	};
// 
// 	return (
// 		<div>
// 			<h1>Welcome</h1>
// 			<div>
// 				<SearchForm onSubmit={onSubmit}/>
// 				{/* <form onSubmit={onSubmit}> */}
// 				{/* 	<input type="text" onChange={e => setTerm(e.target.value)}/> */}
// 				{/* 	<button>Search</button> */}
// 				{/* </form> */}
// 			</div>
// 			<div className="ui segment">
// 				<TrackList tracks={searchTracks} term={searchTerm}/>
// 			</div>		
// 			<div className="ui segment" >
// 				<ArtistList artists={searchArtists} term={searchTerm}/>
// 			</div>
// 			<div className="ui segment" >
// 				<AlbumList albums={searchAlbums} term={searchTerm}/>
// 			</div>
// 	
// 		</div>
// 	)
// }
// 
// export default SearchedTerm;