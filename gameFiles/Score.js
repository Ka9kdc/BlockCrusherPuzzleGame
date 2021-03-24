import React from 'react';
import LevelButtons from './LevelButtons';

export default function ScoreBoard(props) {
	return (
		<div>
			<h1>
				Score: {props.Score} ---- Max Score: {props.maxScore}
			</h1>
			{/* <input
				type="number"
				value={props.hidden}
				name="hiddenAmount"
				onChange={(evt) => props.setHidden(evt.target.value)}
			/> */}
			<button
				type="button"
				onClick={() => props.newGame(props.rowNum, props.colorNum)}
			>
				New Game
			</button>
			{/* <input
				type="number"
				value={props.rowNum}
				name="rowNum"
				onChange={(evt) => props.setRowNum(evt.target.value)}
				min="6"
				max="20"
			/>
			<input
				type="number"
				value={props.colorNum}
				name="colorNUm"
				onChange={(evt) => props.setColorNum(parseInt(evt.target.value, 10))}
				min="3"
				max="9" */}
			{/* /> */}
			<button
				type="button"
				onClick={props.randomize}
				disabled={props.randomizeCount === 0}
			>
				Randomize {props.randomizeCount}
			</button>
			<LevelButtons
				setRowNum={props.setRowNum}
				setHidden={props.setHidden}
				setColorNum={props.setColorNum}
				newGame={props.newGame}
			/>
		</div>
	);
}
