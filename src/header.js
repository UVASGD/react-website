import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
	return (
		<nav id="header">
			<Link to="/"><h1>Student Game Developers</h1></Link>
			<ul id="navigation">
        <Link to="/about"><li>About! </li></Link>
        <Link to="/games"><li>Games! </li></Link>
			</ul>
    </nav>
	);
}

export default Header
