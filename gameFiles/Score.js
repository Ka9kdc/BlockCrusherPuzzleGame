import React from 'react';

export default function ScoreBoard(props) {
	return (
		<div className="game_row">
			{/* {props.gameState !== 'playing' ?
				<h1>{props.gameState} Final Score: {props.Score}</h1>
				 :  */}
			<h1>
				Score: {props.Score} ---- Target Score: {props.maxScore}
			</h1>

			{/* }  */}
		</div>
	);
}
