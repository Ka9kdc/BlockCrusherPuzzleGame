//if tile2X - tile1X === -1 same ys
function checkMoveLeft(board, tile1, x, y, hidden) {
	let tileA = board[tile1[0]][tile1[1]];
	let tileB = board[x][y];
	//tile1 is my left tile
	return (
		leftTileToRightPostion(x, y, tileA, board, hidden) ||
		rightTileTOLeftPostion(tile1[0], y, tileB, board, hidden)
	);
}

function checkMoveRight(board, tile1, x, y, hidden) {
	let tileA = board[tile1[0]][tile1[1]];
	let tileB = board[x][y];
	//tilei is my right tile
	return (
		leftTileToRightPostion(tile1[0], y, tileB, board, hidden) ||
		rightTileTOLeftPostion(x, y, tileA, board, hidden)
	);
}

function checkMoveTop(board, tile1, x, y, hidden) {
	let tileA = board[tile1[0]][tile1[1]];
	let tileB = board[x][y];
	//tile1 is my bottom tile
	return (
		bottonTileToTopPosition(x, y, tileA, board, hidden) ||
		topTileToBottomPosition(x, tile1[1], tileB, board)
	);
}

function checkMoveDown(board, tile1, x, y, hidden) {
	let tileA = board[tile1[0]][tile1[1]];
	let tileB = board[x][y];
	//tile1 is my top tile
	return (
		bottonTileToTopPosition(x, tile1[1], tileB, board, hidden) ||
		topTileToBottomPosition(x, y, tileA, board)
	);
}

// eslint-disable-next-line complexity
export function moveCheck(board, tile1, x, y, hidden) {
	let valid = false;
	if (y === tile1[1]) {
		if (x - tile1[0] === 1 && checkMoveLeft(board, tile1, x, y, hidden)) {
			valid = true;
		}
		if (x - tile1[0] === -1 && checkMoveRight(board, tile1, x, y, hidden)) {
			valid = true;
		}
	}
	if (x === tile1[0]) {
		if (y - tile1[1] === 1 && checkMoveTop(board, tile1, x, y, hidden)) {
			valid = true;
		} else if (
			y - tile1[1] === -1 &&
			checkMoveDown(board, tile1, x, y, hidden)
		) {
			valid = true;
		}
	}
	return valid;
}

// eslint-disable-next-line complexity
export function checkBoardForMoves(board, hidden) {
	let zerosSeen = 0;
	let amountRemaining = 0;
	for (let i = 0; i < hidden; i++) {
		for (let j = 0; j < board.length; j++) {
			if (board[j][i] === 0) {
				zerosSeen++;
			} else {
				if (
					(j + 1 < board && moveCheck(board, [j, i], j + 1, i, hidden)) ||
					(i + 1 < hidden && moveCheck(board, [j, i], j, i + 1, hidden))
				) {
					return [true, amountRemaining];
				}
				amountRemaining++;
				zerosSeen = 0;
			}
		}
		if (zerosSeen >= board.length) return [false, amountRemaining];
	}
	return [false, amountRemaining];
}

// eslint-disable-next-line complexity
function leftTileToRightPostion(tileNewX, y, tile, board, hidden) {
	if (
		board[tileNewX + 2] &&
		tile === board[tileNewX + 1][y] &&
		tile === board[tileNewX + 2][y]
	) {
		return true;
	} else if (
		y + 1 < hidden &&
		tile === board[tileNewX][y + 1] &&
		tile === board[tileNewX][y - 1]
	) {
		return true;
	} else if (
		y + 2 < hidden &&
		tile === board[tileNewX][y + 1] &&
		tile === board[tileNewX][y + 2]
	) {
		return true;
	} else if (
		tile === board[tileNewX][y - 1] &&
		tile === board[tileNewX][y - 2]
	) {
		return true;
	}
	return false;
}

// eslint-disable-next-line complexity
function rightTileTOLeftPostion(tileNewX, y, tile, board, hidden) {
	if (
		board[tileNewX - 2] &&
		tile === board[tileNewX - 1][y] &&
		tile === board[tileNewX - 2][y]
	) {
		return true;
	} else if (
		y + 1 < hidden &&
		tile === board[tileNewX][y + 1] &&
		tile === board[tileNewX][y - 1]
	) {
		return true;
	} else if (
		y + 2 < hidden &&
		tile === board[tileNewX][y + 1] &&
		tile === board[tileNewX][y + 2]
	) {
		return true;
	} else if (
		tile === board[tileNewX][y - 1] &&
		tile === board[tileNewX][y - 2]
	) {
		return true;
	}
	return false;
}

// eslint-disable-next-line complexity
function bottonTileToTopPosition(x, newY, tile, board, hidden) {
	if (
		newY + 2 < hidden &&
		tile === board[x][newY + 1] &&
		tile === board[x][newY + 2]
	) {
		return true;
	}

	if (
		board[x + 1] &&
		board[x - 1] &&
		tile === board[x + 1][newY] &&
		tile === board[x - 1][newY]
	) {
		return true;
	} else if (
		board[x + 2] &&
		tile === board[x + 1][newY] &&
		tile === board[x + 2][newY]
	) {
		return true;
	} else if (
		board[x - 2] &&
		tile === board[x - 2][newY] &&
		tile === board[x - 1][newY]
	) {
		return true;
	}
	return false;
}

// eslint-disable-next-line complexity
function topTileToBottomPosition(x, newY, tile, board) {
	if (tile === board[x][newY - 1] && tile === board[x][newY - 2]) {
		return true;
	}

	if (
		board[x + 1] &&
		board[x - 1] &&
		tile === board[x + 1][newY] &&
		tile === board[x - 1][newY]
	) {
		return true;
	} else if (
		board[x + 2] &&
		tile === board[x + 1][newY] &&
		tile === board[x + 2][newY]
	) {
		return true;
	} else if (
		board[x - 2] &&
		tile === board[x - 2][newY] &&
		tile === board[x - 1][newY]
	) {
		return true;
	}

	return false;
}
