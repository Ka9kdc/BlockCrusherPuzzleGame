//if tile2X - tile1X === -1 same ys
// eslint-disable-next-line complexity
function checkMoveLeft(board, tile1, x, y, hidden) {
	let tileA = board[tile1[0]][tile1[1]];
	let tileB = board[x][y];
	if (board[x - 2] && board[x - 2][y] === tileA && board[x - 1][y] === tileA) {
		return true;
	} else if (
		board[tile1[0] + 2] &&
		board[tile1[0] + 2][y] === tileB &&
		board[tile1[0] + 1][y] === tileB
	) {
		return true;
	} else if (
		y + 1 < hidden &&
		tileA === board[x][y + 1] &&
		tileA === board[x][y - 1]
	) {
		return true;
	} else if (
		y + 1 < hidden &&
		tileB === board[tile1[0]][y + 1] &&
		tileB === board[tile1[0]][y - 1]
	) {
		return true;
	} else if (
		y + 2 < hidden &&
		tileA === board[x][y + 1] &&
		board[x][y + 2] === tileA
	) {
		return true;
	} else if (tileA === board[x][y - 1] && board[x][y - 2] === tileA) {
		return true;
	} else if (
		y + 2 < hidden &&
		tileB === board[tile1[0]][y + 1] &&
		board[tile1[0]][y + 2] === tileB
	) {
		return true;
	} else if (
		tileB === board[tile1[0]][y - 1] &&
		board[tile1[0]][y - 2] === tileB
	) {
		return true;
	}
	return false;
}

// eslint-disable-next-line complexity
function checkMoveRight(board, tile1, x, y, hidden) {
	let tileA = board[tile1[0]][tile1[1]];
	let tileB = board[x][y];
	if (board[x + 2] && board[x + 2][y] === tileA && board[x + 1][y] === tileA) {
		return true;
	} else if (
		board[tile1[0] - 2] &&
		board[tile1[0] - 2][y] === tileB &&
		board[tile1[0] - 1][y] === tileB
	) {
		return true;
	} else if (
		y + 1 < hidden &&
		tileA === board[x][y + 1] &&
		tileA === board[x][y - 1]
	) {
		return true;
	} else if (
		y + 1 < hidden &&
		tileB === board[tile1[0]][y + 1] &&
		tileB === board[tile1[0]][y - 1]
	) {
		return true;
	} else if (
		y + 2 < hidden &&
		tileA === board[x][y + 1] &&
		board[x][y + 2] === tileA
	) {
		return true;
	} else if (tileA === board[x][y - 1] && board[x][y - 2] === tileA) {
		return true;
	} else if (
		y + 2 < hidden &&
		tileB === board[tile1[0]][y + 1] &&
		board[tile1[0]][y + 2] === tileB
	) {
		return true;
	} else if (
		tileB === board[tile1[0]][y - 1] &&
		board[tile1[0]][y - 2] === tileB
	) {
		return true;
	}
	return false;
}

// eslint-disable-next-line complexity
function checkMoveTop(board, tile1, x, y, hidden) {
	let tileA = board[tile1[0]][tile1[1]];
	let tileB = board[x][y];
	if (
		y + 2 < hidden &&
		tileA === board[x][y + 2] &&
		tileA === board[x][y + 1]
	) {
		return true;
	} else if (
		tile1[1] - 2 > -1 &&
		tileB === board[x][tile1[1] - 2] &&
		tileB === board[x][tile1[1] - 1]
	) {
		return true;
	} else if (
		board[x + 1] &&
		board[x - 1] &&
		tileA === board[x + 1][y] &&
		tileB === board[x - 1][y]
	) {
		return true;
	} else if (
		board[tile1[0] + 1] &&
		board[tile1[0] - 1] &&
		tileB === board[tile1[0] + 1][tile1[1]] &&
		tileB === board[tile1[0] - 1][tile1[1]]
	) {
		return true;
	} else if (
		board[x + 2] &&
		tileA === board[x + 1][y] &&
		tileA === board[x + 2][y]
	) {
		return true;
	} else if (
		board[x - 2] &&
		tileA === board[x - 1][y] &&
		tileA === board[x - 2][y]
	) {
		return true;
	} else if (
		board[tile1[0] + 2] &&
		tileB === board[tile1[0] + 1][y] &&
		tileB === board[tile1[0] + 2][y]
	) {
		return true;
	} else if (
		board[tile1[0] - 2] &&
		tileB === board[tile1[0] - 1][y] &&
		tileB === board[tile1[0] - 2][y]
	) {
		return true;
	}
	return false;
}

// eslint-disable-next-line complexity
function checkMoveDown(board, tile1, x, y, hidden) {
	let tileA = board[tile1[0]][tile1[1]];
	let tileB = board[x][y];
	if (y - 2 > -1 && tileA === board[x][y - 2] && tileA === board[x][y - 1]) {
		return true;
	} else if (
		tile1[1] + 2 < hidden &&
		tileB === board[x][tile1[1] + 2] &&
		tileB === board[x][tile1[1] + 1]
	) {
		return true;
	} else if (
		board[x + 1] &&
		board[x - 1] &&
		tileA === board[x + 1][y] &&
		tileB === board[x - 1][y]
	) {
		return true;
	} else if (
		board[tile1[0] + 1] &&
		board[tile1[0] - 1] &&
		tileB === board[tile1[0] + 1][tile1[1]] &&
		tileB === board[tile1[0] - 1][tile1[1]]
	) {
		return true;
	} else if (
		board[x + 2] &&
		tileA === board[x + 1][y] &&
		tileA === board[x + 2][y]
	) {
		return true;
	} else if (
		board[x - 2] &&
		tileA === board[x - 1][y] &&
		tileA === board[x - 2][y]
	) {
		return true;
	} else if (
		board[tile1[0] + 2] &&
		tileB === board[tile1[0] + 1][tile1[1]] &&
		tileB === board[tile1[0] + 2][tile1[1]]
	) {
		return true;
	} else if (
		board[tile1[0] - 2] &&
		tileB === board[tile1[0] - 1][tile1[1]] &&
		tileB === board[tile1[0] - 2][tile1[1]]
	) {
		return true;
	}
	return false;
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
		}
		if (y - tile1[1] === -1 && checkMoveDown(board, tile1, x, y, hidden)) {
			valid = true;
		}
	}

	return valid;
}
