import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import './Posts.scss';

const Posts = () => {
	const [posts, setPosts] = useState([]);
	let activeStyle = {
		color: '#6cb4ee',
	};
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);
	return (
		<div className='posts'>
			<div className='posts-div'>
				{posts.map((post) => {
					return (
						<div className='posts-short'>
							<NavLink
								to={`/posts/${post.id}`}
								style={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
							>
								{post.id}
							</NavLink>
						</div>
					);
				})}
			</div>
			<Outlet></Outlet>
		</div>
	);
};

export default Posts;
