import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import SearchedSong from './SearchedSong';
import Header from './Header';

const App = () => {
  return (
    <div className="App">
    	<Header/>
    	<Routes>
    		<Route path={'/'} element={<HomePage/>}/>
    		<Route path={'/search/:searchTerm'} element={<SearchedSong/>}/>
    	</Routes>
    </div>
  );
}

export default App;
