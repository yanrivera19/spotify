import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
	return (
		<div className="ui secondary menu logo">
			<Link to="/" className="item" style={{ textDecoration: 'none', color: 'whiteSmoke' }}>
				<h1><i className="spotify green icon"></i>Spotify</h1>
			</Link>
		</div>
	);
};

export default Header;