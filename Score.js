import React, { useState } from 'react';
import createGameBoard from './SetupBoard';

export default function ScoreBoard(props) {
    const [rowNum, setRowNum] = useState(10)
    const [colorNum, setColorNum] = useState(4)

    function newGame(){
        const newBoard = createGameBoard(rowNum, colorNum)
        props.setBoard(newBoard)
    }

	return (
		<div>
			<h1>Score: {props.Score}</h1>
            <input type="number" value={props.hidden} name="hiddenAmount" onChange={(evt) => props.setHidden(evt.target.value)} />
            <button type="button" onClick={newGame}>New Game</button>
            <input type="number" value={rowNum} name="rowNum" onChange={(evt) => setRowNum(evt.target.value)} min="6" max="20" />
            <input type="number" value={colorNum} name="colorNUm" onChange={(evt) => setColorNum(evt.target.value)} min="3" max="8" />
		</div>
	);
}
