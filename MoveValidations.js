

//if tile2X - tile1X === -1 same ys
// eslint-disable-next-line complexity
function checkMoveLeft(board, tile1, x, y, hidden) {
	let tileA = board[tile1[0]][tile1[1]];
	let tileB = board[x][y];
	if (board[x - 2] && board[x - 2][y] === tileA && board[x - 1][y] === tileA) {
		console.log('tile1 moveleft matchings leftrow');
		return true;
	} else if (
		board[tile1[0] + 2] &&
		board[tile1[0] + 2][y] === tileB &&
		board[tile1[0] + 1][y] === tileB
	) {
		console.log('tile2 moveLeft matching rightrow');
		return true;
	} else if (
		y + 1 < hidden &&
		tileA === board[x][y + 1] &&
		tileA === board[x][y - 1]
	) {
		console.log('tile1 moveleft matchings centercolumn');
		return true;
	} else if (
		y + 1 < hidden &&
		tileB === board[tile1[0]][y + 1] &&
		tileB === board[tile1[0]][y - 1]
	) {
		console.log('tile2 moveleft matchings centercolumn');
		return true;
	} else if (
		y + 2 < hidden &&
		tileA === board[x][y + 1] &&
		board[x][y + 2] === tileA
	) {
		console.log('tile1 moveleft matchings topColumn');
		return true;
	} else if (tileA === board[x][y - 1] && board[x][y - 2] === tileA) {
		console.log('tile1 moveleft matchings bottomColumn');
		return true;
	} else if (
		y + 2 < hidden &&
		tileB === board[tile1[0]][y + 1] &&
		board[tile1[0]][y + 2] === tileB
	) {
		console.log('tile2 moveleft matchings topColumn');
		return true;
	} else if (
		tileB === board[tile1[0]][y - 1] &&
		board[tile1[0]][y - 2] === tileB
	) {
		console.log('tile2 moveleft matchings bottomColumn');
		return true;
	}
	return false;
}

// eslint-disable-next-line complexity
function checkMoveRight(board, tile1, x, y, hidden) {
	let tileA = board[tile1[0]][tile1[1]];
	let tileB = board[x][y];
	if (board[x + 2] && board[x + 2][y] === tileA && board[x + 1][y] === tileA) {
		console.log('tile1 moveRight matchings rightrow');
		return true;
	} else if (
		board[tile1[0] - 2] &&
		board[tile1[0] - 2][y] === tileB &&
		board[tile1[0] - 1][y] === tileB
	) {
		console.log('tile2 moveRight matching leftrow');
		return true;
	} else if (
		y + 1 < hidden &&
		tileA === board[x][y + 1] &&
		tileA === board[x][y - 1]
	) {
		console.log('tile1 moveRight matchings centercolumn');
		return true;
	} else if (
		y + 1 < hidden &&
		tileB === board[tile1[0]][y + 1] &&
		tileB === board[tile1[0]][y - 1]
	) {
		console.log('tile2 moveRight matchings centercolumn');
		return true;
	} else if (
		y + 2 < hidden &&
		tileA === board[x][y + 1] &&
		board[x][y + 2] === tileA
	) {
		console.log('tile1 moveRight matchings topColumn');
		return true;
	} else if (tileA === board[x][y - 1] && board[x][y - 2] === tileA) {
		console.log('tile1 moveRight matchings bottomColumn');
		return true;
	} else if (
		y + 2 < hidden &&
		tileB === board[tile1[0]][y + 1] &&
		board[tile1[0]][y + 2] === tileB
	) {
		console.log('tile2 moveleft matchings topColumn');
		return true;
	} else if (
		tileB === board[tile1[0]][y - 1] &&
		board[tile1[0]][y - 2] === tileB
	) {
		console.log('tile2 moveleft matchings bottomColumn');
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
		console.log('tile1 moveUP matching topColum');
		return true;
	} else if (
		tile1[1] - 2 > -1 &&
		tileB === board[x][tile1[1] - 2] &&
		tileB === board[x][tile1[1] - 1]
	) {
		console.log('tile2 moveUp matching bottom column');
		return true;
	} else if (
		board[x + 1] &&
		board[x - 1] &&
		tileA === board[x + 1][y] &&
		tileB === board[x - 1][y]
	) {
		console.log('tile1 moveUP matching center row');
		return true;
	} else if (
		board[tile1[0] + 1] &&
		board[tile1[0] - 1] &&
		tileB === board[tile1[0] + 1][tile1[1]] &&
		tileB === board[tile1[0] - 1][tile1[1]]
	) {
		console.log('tile2 moveup matching center row');
		return true;
	} else if (
		board[x + 2] &&
		tileA === board[x + 1][y] &&
		tileA === board[x + 2][y]
	) {
		console.log('tile1 moveUP matching right row');
		return true;
	} else if (
		board[x - 2] &&
		tileA === board[x - 1][y] &&
		tileA === board[x - 2][y]
	) {
		console.log('tile1 moveup matching left row');
		return true;
	} else if (
		board[tile1[0] + 2] &&
		tileB === board[tile1[0] + 1][y] &&
		tileB === board[tile1[0] + 2][y]
	) {
		console.log('tile2 moveup matching right row');
		return true;
	} else if (
		board[tile1[0] - 2] &&
		tileB === board[tile1[0] - 1][y] &&
		tileB === board[tile1[0] - 2][y]
	) {
		console.log('tile2 moveup matching left row');
	}
	return false;
}

// eslint-disable-next-line complexity
function checkMoveDown(board, tile1, x, y, hidden) {
	let tileA = board[tile1[0]][tile1[1]];
	let tileB = board[x][y];
	if (y - 2 > -1 && tileA === board[x][y - 2] && tileA === board[x][y - 1]) {
		console.log('tile1 movedown matching topColum');
		return true;
	} else if (
		tile1[1] + 2 < hidden &&
		tileB === board[x][tile1[1] + 2] &&
		tileB === board[x][tile1[1] + 1]
	) {
		console.log('tile2 movedown matching bottom column');
		return true;
	} else if (
		board[x + 1] &&
		board[x - 1] &&
		tileA === board[x + 1][y] &&
		tileB === board[x - 1][y]
	) {
		console.log('tile1 movedown matching center row');
		return true;
	} else if (
		board[tile1[0] + 1] &&
		board[tile1[0] - 1] &&
		tileB === board[tile1[0] + 1][tile1[1]] &&
		tileB === board[tile1[0] - 1][tile1[1]]
	) {
		console.log('tile2 movedown matching center row');
		return true;
	} else if (
		board[x + 2] &&
		tileA === board[x + 1][y] &&
		tileA === board[x + 2][y]
	) {
		console.log('tile1 movedown matching right row');
		return true;
	} else if (
		board[x - 2] &&
		tileA === board[x - 1][y] &&
		tileA === board[x - 2][y]
	) {
		console.log('tile1 movedown matching left row');
		return true;
	} else if (
		board[tile1[0] + 2] &&
		tileB === board[tile1[0] + 1][tile1[1]] &&
		tileB === board[tile1[0] + 2][tile1[1]]
	) {
		console.log('tile2 movedwon matching right row');
		return true;
	} else if (
		board[tile1[0] - 2] &&
		tileB === board[tile1[0] - 1][tile1[1]] &&
		tileB === board[tile1[0] - 2][tile1[1]]
	) {
		console.log('tile2 moveup matching left row');
	}
	return false;
}

// eslint-disable-next-line complexity
export function moveCheck(board, tile1, x, y, hidden) {
	let valid = false;
	if (y === tile1[1]) {
		if (x - tile1[0] === 1 && checkMoveLeft(board, tile1, x, y, hidden)) {
			if (tile1[1] !== y) console.log('y does not match');
			valid = true;
		}
		if (x - tile1[0] === -1 && checkMoveRight(board, tile1, x, y, hidden)) {
			if (tile1[1] !== y) console.log('y does not match');
			valid = true;
		}
	}
	if (x === tile1[0]) {
		if (y - tile1[1] === 1 && checkMoveTop(board, tile1, x, y, hidden)) {
			if (tile1[0] !== x) console.log('x does not match');
			valid = true;
		}
		if (y - tile1[1] === -1 && checkMoveDown(board, tile1, x, y, hidden)) {
			if (tile1[0] !== x) console.log('x does not match');
			valid = true;
		}
	}

	return valid;
}
