import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import SearchedTerm from './SearchedTerm';
import Header from './Header';

const App = () => {
    return (
        <div className="ui container" style={{paddingTop: '30px', paddingBottom: '50px'}}>
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/:searchTerm'} element={<SearchedTerm/>}/>
            </Routes>
        </div>
    );
};

export default App;
