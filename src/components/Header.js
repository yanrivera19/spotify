import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
	return (
		<div className="ui secondary menu">
			<Link to="/" className="item" style={{ textDecoration: 'none', color: 'whiteSmoke' }}>
				<h3 style={{fontSize: '25px'}}><i className="spotify green icon"></i>Spotify</h3>
			</Link>
		</div>
	);
};

export default Header;