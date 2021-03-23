function getTiles(board, hidden) {
	const arr = [];
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < hidden; j++) {
			if (board[i][j] !== 0) {
				arr.push(board[i][j]);
				board[i][j] = 0;
			}
		}
	}
	return arr;
}

function assignTiles(arr, board, hidden) {
	let row = 0;
	while (row < hidden && arr.length) {
		for (let i = 0; i < board.length; i++) {
			if (arr.length === 0) break;
			const num = Math.floor(Math.random() * arr.length);
			let tile = arr.splice(num, 1);
			board[i][row] = tile[0];
		}
		row++;
	}
}

export default function reorderTiles(board, hidden) {
	let tileArr = getTiles(board, hidden);
	assignTiles(tileArr, board, hidden);
	return board;
}
