import React, {useState, useEffect} from 'react';
import SpotifyWebApi from "spotify-web-api-js"
import TrackList from './TrackList';
import ArtistList from './ArtistList';
import SearchForm from './SearchForm';
import AlbumList from './AlbumList';
import {getToken} from '../token';
import {useLocation, useNavigate} from 'react-router-dom';

const SearchResults = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchTracks, setSearchTracks] = useState([]);
	const [searchArtists, setSearchArtists] = useState([]);
	const [searchAlbums, setSearchAlbums] = useState([]);
	const location = useLocation();
	const navigate = useNavigate();
	const spotifyApi = new SpotifyWebApi();

	useEffect(() => {
		getToken();
		
		setSearchTerm(JSON.parse(localStorage.getItem("term")));
		setSearchTracks(location.state.tracks);
		setSearchArtists(location.state.artists);
		setSearchAlbums(location.state.albums);
	}, [location.state.tracks, location.state.artists, location.state.albums]);

	const onSubmit = formValues => {
		setSearchTerm(formValues);
		getToken();

		spotifyApi.search(formValues, ['track','album','artist'], {limit: 50}).then(
			function (data) {
		    	setSearchTracks(data.tracks.items);
		    	setSearchArtists(data.artists.items);
		    	setSearchAlbums(data.albums.items);
		    	navigate(`/${formValues}`, {state: {tracks: data.tracks.items, artists: data.artists.items, albums: data.albums.items}}) 
		  	},
		  	function (err) {
		    	console.error(err);
		  	}
		);
	};

	return (
		<div>
			<div style={{paddingTop: '20px'}}>
				<SearchForm initialValues={{term: searchTerm}} onSubmit={onSubmit}/>
			</div>
			{searchTracks.length > 0 ? (
				<>
					<h2 className="results-header" style={{paddingBottom: '20px', textAlign: 'center'}}>Results for <span style={{fontStyle: 'italic'}}>{searchTerm}</span>:</h2>
					<div className="ui inverted segment " style={{marginBottom: '30px'}}>
						<TrackList tracks={searchTracks} term={searchTerm}/>
					</div>		
					<div className="ui inverted segment" style={{marginBottom: '30px'}}>
						<ArtistList artists={searchArtists} term={searchTerm}/>
					</div>
					<div className="ui inverted segment" style={{marginBottom: '30px'}}>
						<AlbumList albums={searchAlbums} term={searchTerm}/>
					</div>
				</>
			) : (
				<h3 style={{fontSize: '17px'}}>Sorry, no results were found.</h3>
			)}	
		</div>
	);
};

export default SearchResults;