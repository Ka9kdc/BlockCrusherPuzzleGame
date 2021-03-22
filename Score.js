import React, { useState } from 'react';
import createGameBoard from './SetupBoard';

export default function ScoreBoard(props) {
	const [rowNum, setRowNum] = useState(10);
	
	
	

	function newGame() {
		const newBoard = createGameBoard(rowNum, props.colorNum);
		props.setBoard(newBoard);
		props.setScore(0)
	}

	return (
		<div>
			<h1>Score: {props.Score}</h1>
			<input
				type="number"
				value={props.hidden}
				name="hiddenAmount"
				onChange={(evt) => props.setHidden(evt.target.value)}
			/>
			<button type="button" onClick={newGame}>
				New Game
			</button>
			<input
				type="number"
				value={rowNum}
				name="rowNum"
				onChange={(evt) => setRowNum(evt.target.value)}
				min="6"
				max="20"
			/>
			<input
				type="number"
				value={props.colorNum}
				name="colorNUm"
				onChange={(evt) => props.setColorNum(evt.target.value)}
				min="3"
				max="8"
			/>
			<button type="button" onClick={props.randomize} disabled={props.randomizeCount === 0}>Randomize {props.randomizeCount}</button>
		</div>
	);
}
