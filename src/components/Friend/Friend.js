import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Friend.scss';

const Friend = (props) => {
	const { name, id, username, email, address } = props.user;
	let navigate = useNavigate();

	const showUser = (id) => {
		const path = `/friends/${id}`;
		navigate(path);
	};

	return (
		<div className='user'>
			<p className='name'>{name}</p>
			<button onClick={() => showUser(id)}>{username}</button>
		</div>
	);
};

export default Friend;
