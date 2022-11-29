import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
	let activeStyle = {
		textDecoration: 'underline',
		color: 'green',
	};
	return (
		<div>
			<h1>Welcome to fuckbook</h1>
			<nav>
				<NavLink
					to='/'
					style={({ isActive }) =>
						isActive ? activeStyle : undefined
					}
				>
					Home
				</NavLink>
				<NavLink
					to='/friends'
					style={({ isActive }) =>
						isActive ? activeStyle : undefined
					}
				>
					Friends
				</NavLink>
				<NavLink
					to='/about'
					style={({ isActive }) =>
						isActive ? activeStyle : undefined
					}
				>
					About
				</NavLink>
			</nav>
		</div>
	);
};

export default Header;
