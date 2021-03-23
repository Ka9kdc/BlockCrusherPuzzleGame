const row = 10;

const checkTiles = (i, rowTiles, newBoard, styleNum, tile) => {
	console.log(typeof styleNum)
	while (
		(rowTiles[i - 1] === tile && rowTiles[i - 2] === tile) ||
		(newBoard[newBoard.length - 2] &&
			newBoard[newBoard.length - 1][i] === tile &&
			newBoard[newBoard.length - 2][i] === tile)
	) {
		tile--;
		if (tile === 0) tile = styleNum;
	}
	return tile;
};

const makeRow = (columnNum, newBoard, styleNum) => {
	let rowTiles = new Array(columnNum);
	for (let i = 0; i < columnNum; i++) {
		let tile = Math.ceil(Math.random() * styleNum);
		if (rowTiles[i - 2] || newBoard[newBoard.length - 2]) {
			tile = checkTiles(i, rowTiles, newBoard, styleNum, tile);
		}
		rowTiles[i] = tile;
	}
	return rowTiles;
};

export default function createGameBoard(rowNum = row, styleNum = 4) {
	let newBoard = [];
	while (newBoard.length < rowNum) {
		const rowTiles = makeRow(rowNum * 5, newBoard, styleNum);
		newBoard.push(rowTiles);
	}
	return newBoard;
}
