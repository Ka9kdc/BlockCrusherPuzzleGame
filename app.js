import React, {useState} from 'react';
import AboutPage from './AboutPage/AboutPage';
import TileBoard from './gameFiles/TileBoard';

export default function App() {
	const [gameState, setGameState] = useState('Loading');
	if (gameState === 'Loading'){
		return <AboutPage setGameState={setGameState} />
	} else {
	return (
		<div>
			Playing game
			<TileBoard gameState={gameState} setGameState={setGameState} />
		</div>
	);
	}
}
