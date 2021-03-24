import React from 'react';

export default function LevelButtons(props) {
	function startGame(rows, colors) {
		props.setRowNum(rows);
		props.setColorNum(colors);
		props.setHidden(rows);
		props.newGame(rows, colors);
	}

	return (
		<div className="level_colors">
				<button
				type="button"
				onClick={() => props.newGame(props.rowNum, props.colorNum)}
				style={{backgroundColor: "lightgreen"}}
			>
				New Game
			</button>

			<button
				type="button"
				onClick={props.randomize}
				disabled={props.randomizeCount === 0}
				style={{backgroundColor: "#f3ccff"}}>

				Randomize {props.randomizeCount}
			</button>
			<button type="button" onClick={() => props.setGameState('Loading')}>
				Return to Homepage
			</button>
			<h3>Levels</h3>
			<button type="button" onClick={() => startGame(6, 3)} style={{backgroundColor: "#f3ccff"}}>
				Three Colors
			</button>
			<button type="button" onClick={() => startGame(10, 4)} className="blue">
				Four Colors
			</button>
			<button type="button" onClick={() => startGame(10, 5)} style={{backgroundColor: "lightgreen"}}>
				Five Colors
			</button>
			<button type="button" onClick={() => startGame(10, 6)} style={{backgroundColor: "beige"}}>
				Six Colors
			</button>
			<button type="button" onClick={() => startGame(15, 7)}className="orange">
				Seven Colors
			</button>
			<button type="button" onClick={() => startGame(15, 8)} className="pink">
				Eight Colors
			</button>
			<button type="button" onClick={() => startGame(15, 9)} className="grey">
				Nine Colors
			</button>
		</div>
	);
}
