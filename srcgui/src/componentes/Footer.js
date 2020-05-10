import React from 'react';

function Footer(){
	return (
		<nav className="navbar fixed-buttom navbar-dark bg-dark" style={{ backgroundColor: 'black', color: 'white'}}>
			<p>&copy; {(new Date().getFullYear())} Wattlab, Inc.</p>
        </nav>
    );
}

export default Footer;