
const checkRow = (newBoard, board, i, j, hidden) => {

	if (
		board[i][j - 1] === board[i][j] &&
		board[i][j + 1] === board[i][j] &&
		j < hidden - 1
	) {
		newBoard[i][j - 1] = 'x';
		newBoard[i][j] = 'x';
		newBoard[i][j + 1] = 'x';
	}

}

const checkColumn = (newBoard, board, i, j) => {
if (
board[i - 1] &&
board[i + 1] &&
board[i - 1][j] === board[i][j] &&
board[i + 1][j] === board[i][j]
) {
newBoard[i - 1][j] = 'x';
newBoard[i][j] = 'x';
if (!newBoard[i + 1]) newBoard[i + 1] = [];
newBoard[i + 1][j] = 'x';
}
}


export function tilesFall(board, columLength, hidden, char) {
let boardMatches = true;
let count = 0;
for (let i = 0; i < board.length; i++) {
let pointer = 0;
while (pointer < hidden) {
	if (board[i][pointer] === char) {
		boardMatches = false;
		board[i].splice(pointer, 1);
		count++;
	} else {
		pointer++;
	}
}
while (board[i].length < columLength) {
	board[i].push(0);
}
}
return [board, boardMatches, count];
}

export default function cleanUpBoard(board, hidden) {
	let newBoard = [];

	for (let i = 0; i < board.length; i++) {
		if (!newBoard[i]) {
			newBoard[i] = [];
		}
		for (let j = 0; j < board[i].length; j++) {
			if (!newBoard[i][j]) {
				newBoard[i][j] = board[i][j];
			}
			if (board[i][j] !== 0 && j < hidden) {
				checkRow(newBoard, board, i, j, hidden)
				checkColumn(newBoard, board, i, j)
			}
		}
	}

	return tilesFall(newBoard, newBoard[0].length, hidden, "x");
}


