import React from "react";
import Search from "./Search";
import Header from "./Header";

const App = () => {
    return (
        <div style={{ paddingTop: "30px", paddingBottom: "50px" }}>
            <Header />
            <div className="app ui container">
                <Search />
            </div>
        </div>
    );
};

export default App;
