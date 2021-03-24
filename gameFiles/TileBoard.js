/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import cleanUpBoard, { endGame, tilesFall } from './cleanup';
import { moveCheck } from './MoveValidations';
import reorderTiles from './reOrderTIles';
import ScoreBoard from './Score';
import createGameBoard from './SetupBoard';
import LevelButtons from './LevelButtons';

const initialBoard = createGameBoard();

export default function TileBoard(props) {
	const [tile1, setTile1] = useState([]);
	const [board, setBoard] = useState(initialBoard);
	const [matchs, setMatchs] = useState(true);
	const [Score, setScore] = useState(0);
	const [hidden, setHidden] = useState(10);
	const [colorNum, setColorNum] = useState(4);
	const [randomizeCount, setRandomCount] = useState(colorNum);
	const [rowNum, setRowNum] = useState(10);
	const [scoreMax, setScoreMax] = useState(rowNum * hidden * colorNum);

	function IncreaseScore(amount) {
		const newScore = Score + amount;
		setScore(newScore);
	}

	function newGame(row, color) {
		const newBoard = createGameBoard(row, color);
		setBoard(newBoard);
		setScore(0);
		setRandomCount(color);
		setScoreMax(row * hidden * color);
		props.setGameState('playing');
	}

	useEffect(() => {
		if (!matchs) {
			setTimeout(() => {
				const [nextBoard, newMatchs, count] = cleanUpBoard(board, hidden);
				setBoard(nextBoard);
				setMatchs(newMatchs);
				IncreaseScore(count);
			}, 400);
		}
		if (
			props.gameState === 'playing' &&
			(board[0][hidden] === 0 || randomizeCount < Math.ceil(colorNum / 2))
		) {
			const [message, minimizedBoard] = endGame(
				board,
				hidden,
				randomizeCount,
				Score,
				scoreMax
			);
			if (minimizedBoard) {
				setBoard(minimizedBoard);
				setMatchs(false);
			}
			if (message === 'winner') {
				const addToScore = randomizeCount * 50;
				IncreaseScore(addToScore);
			}
			props.setGameState(message);
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
			let newBoard = reorderTiles(board, hidden);
			setBoard(newBoard);
			setTimeout(() => {
				const [nextBoard, newMatchs] = tilesFall(
					newBoard,
					board[0].length,
					hidden,
					0
				);
				newBoard = nextBoard;
				setBoard(nextBoard);
				setTile1([]);
				setMatchs(newMatchs);
			}, 400);
			setTimeout(() => {
				const [nextBoard, newMatchs, count] = cleanUpBoard(newBoard, hidden);
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
				Score={Score}
				maxScore={scoreMax}
				setRowNum={setRowNum}
				gameState={props.gameState}
			/>
			<div className="game_row">
				<LevelButtons
					setRowNum={setRowNum}
					setHidden={setHidden}
					setColorNum={setColorNum}
					newGame={newGame}
					randomize={randomize}
					rowNum={rowNum}
					randomizeCount={randomizeCount}
					colorNum={colorNum}
					setGameState={props.setGameState}
				/>
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
															onClick={() => setTile1([])}
														>
															{/* {tile} {colors[tile]} {typeof tile} */}
														</div>
													);
												}
												return (
													<div
														className={`${colors[tile]} tile`}
														key={`${rowIdx} ${columnIdx}`}
														onClick={() => validateMove(rowIdx, columnIdx)}
													>
														{/* {tile} {colors[tile]} {typeof tile} */}
													</div>
												);
											}
										})}
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
