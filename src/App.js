import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './components/About/About';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Post from './components/Post/Post';
import Posts from './components/Posts/Posts';

function App() {
	return (
		<div className='App'>
			<Header></Header>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='about' element={<About />}></Route>
				<Route path='friends' element={<Friends />}></Route>
				{/* Dynamic router */}
				<Route
					path='friends/:friendId'
					element={<FriendDetail />}
				></Route>
				<Route path='posts' element={<Posts />}>
					<Route path=':postId' element={<Post />}></Route>
				</Route>
				{/* Not found page */}
				<Route path='*' element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}

export default App;
