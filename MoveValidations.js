//if tile2X - tile1X === -1 same ys
function checkMoveLeft(board, tile1, x, y, hidden) {
	let tileA = board[tile1[0]][tile1[1]];
	let tileB = board[x][y];
	//tile1 is my left tile
	return 	leftTileToRightPostion(x, y, tileA, board, hidden) || rightTileTOLeftPostion(tile1[0], y, tileB, board, hidden )
}


function checkMoveRight(board, tile1, x, y, hidden) {
	let tileA = board[tile1[0]][tile1[1]];
	let tileB = board[x][y];
	//tilei is my right tile
	return leftTileToRightPostion(tile1[0], y, tileB, board, hidden)  || rightTileTOLeftPostion(x, y, tileA, board, hidden)
}


function checkMoveTop(board, tile1, x, y, hidden) {
	let tileA = board[tile1[0]][tile1[1]];
	let tileB = board[x][y];
	//tile1 is my bottom tile
	return bottonTileToTopPosition(x, y, tileA, board, hidden) || topTileToBottomPosition(x, tile1[1], tileB, board)
}

function checkMoveDown(board, tile1, x, y, hidden) {
	let tileA = board[tile1[0]][tile1[1]];
	let tileB = board[x][y];
	//tile1 is my top tile
	return bottonTileToTopPosition(x, tile1[1], tileB, board, hidden) || topTileToBottomPosition(x, y, tileA, board)
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
		} else if (y - tile1[1] === -1 && checkMoveDown(board, tile1, x, y, hidden)) {
			valid = true;
		} else {
			console.log('X', x, 'tile1Y', tile1[1], 'tile2Y', y, 'tile2 - tile1', y - tile1[1])
		}
	}
	if (!valid){
		console.log( tile1, [x, y])
	}
	return valid;
}

// eslint-disable-next-line complexity
export function checkBoardForMoves(board, hidden) {
	let zerosSeen = 0;
	for (let i = 0; i < hidden; i++) {
		for (let j = 0; j < board.length; j++) {
			if (board[j][i] === 0) {
				zerosSeen++;
			} else {
				if (
					(j + 1 < board && moveCheck(board, [j, i], j + 1, i, hidden)) ||
					(i + 1 < hidden && moveCheck(board, [j, i], j, i + 1, hidden))
				) {
					console.log("valid move", board[i][j], i, j, "hidden", hidden, "moveCheck")
					return true;
				}
				zerosSeen = 0;
			}}
			if (zerosSeen >= (board.length)) return false;
		}
		return false;
}


// eslint-disable-next-line complexity
function leftTileToRightPostion(tileNewX, y, tile, board, hidden){
	if (board[tileNewX + 2] && tile === board[tileNewX + 1][y] && tile === board[tileNewX + 2][y] ){
		console.log('leftTileToRightPostion row')
		return true
	} else if (y + 1 < hidden && tile === board[tileNewX][y + 1] && tile === board[tileNewX][y - 1]) {
		console.log('leftTileTORightPosition column Center')
		return true
	}
else if (y + 2 < hidden && tile === board[tileNewX][y + 1] && tile === board[tileNewX][y + 2]) {
	console.log('leftTileTORightPosition column above')
	return true
}
else if (tile === board[tileNewX][y - 1] && tile === board[tileNewX][y - 2]) {
	console.log('leftTileTORightPosition column bellow')
	return true
}
return false
}

// eslint-disable-next-line complexity
function rightTileTOLeftPostion(tileNewX, y, tile, board, hidden){
	if (board[tileNewX - 2] && tile === board[tileNewX - 1][y] && tile === board[tileNewX - 2][y] ){
		console.log('rigthTileToLeftPostion row')
		return true
	} else if (y + 1 < hidden && tile === board[tileNewX][y + 1] && tile === board[tileNewX][y - 1]) {
		console.log('rigthTileToLeftPostion column Center')
		return true
	}
else if (y + 2 < hidden && tile === board[tileNewX][y + 1] && tile === board[tileNewX][y + 2]) {
	console.log('rigthTileToLeftPostion column above')
	return true
}
else if (tile === board[tileNewX][y - 1] && tile === board[tileNewX][y - 2]) {
	console.log('rigthTileToLeftPostion column bellow')
	return true
}
return false

}


// eslint-disable-next-line complexity
function bottonTileToTopPosition(x, newY, tile, board, hidden){
	if (newY + 2 < hidden && tile === board[x][newY + 1] && tile === board[x][newY + 2]){
		console.log('bottomTileToTopPosition column')
		return true
	}
	console.log('bottonTileToTopPosition', tile === board[x][newY + 1], tile === board[x][newY + 2])
	if (board[x + 1] && board[x - 1] && tile === board[x + 1][newY] && tile === board[x - 1][newY]) {
		console.log('bottonTIleToTopPostion row center')
		return true
	}
 else if (board[x + 2]  && tile === board[x + 1][newY] && tile === board[x + 2][newY]) {
	 console.log('bottonTIleToTopPostion row right')
	 return true
 }
 else if (board[x - 2] && tile === board[x - 2][newY] && tile === board[x - 1][newY]) {
	 console.log('bottonTIleToTopPostion row left')
	 return true
 }
return false
}

// eslint-disable-next-line complexity
function topTileToBottomPosition(x, newY, tile, board){
	if (tile === board[x][newY - 1] && tile === board[x][newY - 2]){
		console.log('topToleToBOttomPosition column')
		return true
	}
	console.log('topToleTPBottomTile', tile === board[x][newY - 1],  tile === board[x][newY - 2])
	if (board[x + 1] && board[x - 1] && tile === board[x + 1][newY] && tile === board[x - 1][newY]) {
		console.log('topToleToBOttomPosition row center')
		return true
	}
 else if (board[x + 2]  && tile === board[x + 1][newY] && tile === board[x + 2][newY]) {
	 console.log('topToleToBOttomPosition  row right')
	 return true
 }
 else if (board[x - 2] && tile === board[x - 2][newY] && tile === board[x - 1][newY]) {
	 console.log('topToleToBOttomPosition  row left')
	 return true
 }

return false

}
