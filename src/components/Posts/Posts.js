import React, { useEffect, useState } from 'react';
import './Posts.scss';

const Posts = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);
	return (
		<div className='posts'>
			{posts.map((post) => {
				return (
					<div className='posts-short'>
						<h3>{post.title}</h3>
						<button>View Post</button>
					</div>
				);
			})}
		</div>
	);
};

export default Posts;
