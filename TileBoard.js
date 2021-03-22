/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import cleanUpBoard, { endGame, tilesFall } from './cleanup';
import { moveCheck } from './MoveValidations';
import reorderTiles from './reOrderTIles';
import ScoreBoard from './Score';
import createGameBoard from './SetupBoard';

export default function TitleBoard() {
	const [tile1, setTile1] = useState([]);
	const [board, setBoard] = useState(createGameBoard());
	const [matchs, setMatchs] = useState(true);
	const [Score, setScore] = useState(0);
	const [hidden, setHidden] = useState(10);
	const [colorNum, setColorNum] = useState(4);
	const [randomizeCount, setRandomCount] = useState(colorNum);
	const [gameState, setGameState] = useState('playing');
	const [scoreMax, setScoreMax] = useState(hidden * (hidden * 5) )

	function IncreaseScore(amount) {
		const newScore = Score + amount;
		setScore(newScore);
	}

	useEffect(() => {
		if (!matchs) {
			setTimeout(() => {
				const [nextBoard, newMatchs, count] = cleanUpBoard(board, hidden);
				setBoard(nextBoard);
				setMatchs(newMatchs);
				IncreaseScore(count);
				if (nextBoard[0][hidden] === 0 && gameState === 'playing') {
					const [message, minimizedBoard] = endGame(nextBoard, hidden, randomizeCount, Score+count, scoreMax );
					setGameState(message)
					if (minimizedBoard){
						setBoard(minimizedBoard)
						setMatchs(newMatchs);
						IncreaseScore(0);
					}
				}
			}, 400);
		}
	}, [matchs, Score]);

	function validateMove(x, y) {
		if (tile1.length === 0 && board[x][y] !== 0) {
			setTile1([x, y]);
		} else if (
			board[x][y] !== 0 &&
			Math.abs(x - tile1[0]) + Math.abs(y - tile1[1]) === 1 &&
			moveCheck(board, tile1, x, y, hidden)
		) {
			const temp = board[tile1[0]][tile1[1]];
			board[tile1[0]][tile1[1]] = board[x][y];
			board[x][y] = temp;
			const [nextBoard, newMatchs, count] = cleanUpBoard(board, hidden);
			setBoard(nextBoard);
			setTile1([]);
			setMatchs(newMatchs);
			IncreaseScore(count);
		} else {
			setTile1([]);
		}
	}

	function randomize() {
		if (randomizeCount > 0) {
			const newCount = randomizeCount - 1;
			setRandomCount(newCount);
			const newBoard = reorderTiles(board, hidden);
			setBoard(newBoard);
			setTimeout(() => {
				const [nextBoard, newMatchs, count] = tilesFall(
					board,
					board[0].length,
					hidden,
					0
				);
				setBoard(nextBoard);
				setTile1([]);
				setMatchs(newMatchs);
				IncreaseScore(count);
			}, 400);
		}
	}



	const colors = [
		'white',
		'red',
		'blue',
		'green',
		'purple',
		'orange',
		'pink',
		'brown',
		'yellow',
		'gray',
	];

	return (
		<div>
			<ScoreBoard
				hidden={hidden}
				setHidden={setHidden}
				setScore={setScore}
				Score={Score}
				setBoard={setBoard}
				randomize={randomize}
				randomizeCount={randomizeCount}
				colorNum={colorNum}
				setColorNum={setColorNum}
				setRandomCount={setRandomCount}
				maxScore={scoreMax}
			/>
			{gameState !== 'playing' && <h1>{gameState}</h1>}
			<div className="tile_board">
				{board.length &&
					board.map((row, rowIdx) => {
						return (
							<div key={`row-${rowIdx}`} className="row">
								{/* Row - {rowIdx} */}
								{row.length &&
									row.map((tile, columnIdx) => {
										if (columnIdx < hidden) {
											if (rowIdx === tile1[0] && columnIdx === tile1[1]) {
												return (
													<div
														className={`${colors[tile]} tile selected `}
														key={`${rowIdx} ${columnIdx}`}
													/>
												);
											}
											return (
												<div
													className={`${colors[tile]} tile`}
													key={`${rowIdx} ${columnIdx}`}
													onClick={() => validateMove(rowIdx, columnIdx)}
												/>
											);
										}
									})}
							</div>
						);
					})}
			</div>
		</div>
	);
}
