import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.scss';

const Friends = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<div className='users-div'>
			{/* <h1>Friends</h1> */}
			<div className='users'>
				{users.map((user) => {
					return <Friend user={user} key={user.id}></Friend>;
				})}
			</div>
		</div>
	);
};

export default Friends;
