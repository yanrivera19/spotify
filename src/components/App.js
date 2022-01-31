import React from 'react';
import {Routes, Route} from 'react-router-dom';
import stylesheet from '../stylesheet.css';
import HomePage from './HomePage';
import SearchedTerm from './SearchedTerm';
import Header from './Header';
import FullAlbumList from './FullAlbumList';
import FullTrackList from './FullTrackList';
import FullArtistList from './FullArtistList';

const App = () => {
    return (
        <div className="App ui container" style={{paddingTop: '30px', paddingBottom: '50px'}}>
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/:searchTerm'} element={<SearchedTerm/>}/>
                <Route path={'/albums/:term'} element={<FullAlbumList/>}/>
                <Route path={'/songs/:term'} element={<FullTrackList/>}/>
                <Route path={'/artists/:term'} element={<FullArtistList/>}/>
            </Routes>
        </div>
    );
};

export default App;
