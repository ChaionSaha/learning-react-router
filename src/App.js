import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

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
				{/* Not found page */}
				<Route path='*' element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}

export default App;
