import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
	let { friendId } = useParams();
	const [friend, setFriend] = useState({});

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
			.then((res) => res.json())
			.then((data) => setFriend(data));
	}, []);

	return (
		<div>
			<h1>{friend.name}</h1>
			<p className='email'>Email: {friend.email}</p>
			<p className='city'>Adress: {friend.address?.city}</p>
			<div className='site'>
				website: <a href={friend.website}>{friend.website}</a>
			</div>
		</div>
	);
};

export default FriendDetail;
