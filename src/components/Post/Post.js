import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Post.scss';

const Post = () => {
	const { postId } = useParams();
	const [post, setPost] = useState({});
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((res) => res.json())
			.then((data) => setPost(data));
	}, [postId]);

	return (
		<div className='post-details'>
			<p className='id'>{post.id}</p>
			<h1> {post.title} </h1>
			<p>{post.body}</p>
		</div>
	);
};

export default Post;
