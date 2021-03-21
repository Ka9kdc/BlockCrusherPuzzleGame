import React from 'react';
import createGameBoard from './SetupBoard';

export default function ScoreBoard(props) {
	

    function newGame(){
        const newBoard = createGameBoard()
        props.setBoard(newBoard)
    }

	return (
		<div>
			<h1>Score: {props.Score}</h1>
            <input type="number" value={props.hidden} name="hiddenAmount" onChange={(evt) => props.setHidden(evt.target.value)} />
            <button type="button" onClick={newGame}>New Game</button>
		</div>
	);
}
