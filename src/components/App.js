import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import SearchResults from './SearchResults';
import Header from './Header';

const App = () => {
    return (
        <div style={{paddingTop: '30px', paddingBottom: '50px'}}>
            <Header/>
            <div className="app ui container" >                
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/:searchTerm'} element={<SearchResults/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
