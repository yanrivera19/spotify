import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import SearchedSong from './SearchedSong';
import Header from './Header';
import FullAlbumList from './FullAlbumList';
import FullTrackList from './FullTrackList';
import FullArtistList from './FullArtistList';

const App = () => {
    return (
        <div className="App ui container">
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/search/:searchTerm'} element={<SearchedSong/>}/>
                <Route path={'/albums/:term'} element={<FullAlbumList/>}/>
                <Route path={'/songs/:term'} element={<FullTrackList/>}/>
                <Route path={'/artists/:term'} element={<FullArtistList/>}/>
            </Routes>
        </div>
    );
};

export default App;
