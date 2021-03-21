// eslint-disable-next-line complexity
export function checkMoveTileX(x, y, tile1, board) {
	const tile = board[x][y];
	if (tile1[0] === x) {
		let row = board[x];
		if (
			(tile === row[y - 1] && (tile === row[y + 1] || tile === row[y - 2])) ||
			(tile === row[y + 1] && tile === row[y + 2]) ||
            (tile === row[tile1[1] - 1] && (tile === row[tile1[1] + 1] || tile === row[tile1[1] - 2])) ||
            (tile === row[tile1[1] + 1] && tile === row[tile1[1] + 2])){
                console.log('validx')
            return true
        }
	}
	return false;
}

// eslint-disable-next-line complexity
export function checkMoveTileY(x, y, tile1, board){
    const tile = board[x][y]
    if (tile1[1] === y){
        if ((
                    board[x + 1] &&
                    board[x - 1] &&
                    tile === board[x - 1][tile1[1]] &&
                    tile === board[x + 1][tile1[1]]
                ) ||
(
                        board[x - 1] &&
                        board[x - 2] &&
                        tile === board[x - 1][tile1[1]] &&
                        tile === board[x - 2][tile1[1]]
                    ) ||
 (
                        board[x + 1] &&
                        board[x + 2] &&
                        tile === board[x + 1][tile1[1]] &&
                        tile === board[x + 2][tile1[1]]
//                     ) ||
//  (
//                         board[x - 3] &&
//                         board[x - 2] &&
//                         tile === board[x - 3][tile1[1]] &&
//                         tile === board[x - 2][tile1[1]]
//                     ) ||
//  (
//                         board[x + 3] &&
//                         board[x + 2] &&
//                         tile === board[x + 3][tile1[1]] &&
//                         tile === board[x + 2][tile1[1]]
                    ) ) {
                        console.log('validY')
                        return true;
            }
    }
    console.log(tile, x, y, tile1)
    return false
}

// eslint-disable-next-line complexity
export function checkMove(x, y, tile1, board) {
		if ((
			board[x][y] === board[tile1[0]][y - 1] &&
			board[x][y] === board[tile1[0]][y + 1]
		) ||
(
			board[x][y] === board[tile1[0]][y - 1] &&
			board[x][y] === board[tile1[0]][y - 2]
		) ||
(
			board[x][y] === board[tile1[0]][y + 1] &&
			board[x][y] === board[tile1[0]][y + 2]
		) ||
(
			board[x + 1] &&
			board[x - 1] &&
			board[x][y] === board[x - 1][tile1[1]] &&
			board[x][y] === board[x + 1][tile1[1]]
		) ||
(
			board[x - 1] &&
			board[x - 2] &&
			board[x][y] === board[x - 1][tile1[1]] &&
			board[x][y] === board[x - 2][tile1[1]]
		) ||
(
			board[x + 1] &&
			board[x + 2] &&
			board[x][y] === board[x + 1][tile1[1]] &&
			board[x][y] === board[x + 2][tile1[1]]
		) ||
(
			board[x][y] === board[tile1[0]][y - 3] &&
			board[x][y] === board[tile1[0]][y - 2]
		) ||
(
			board[x][y] === board[tile1[0]][y + 3] &&
			board[x][y] === board[tile1[0]][y + 2]
		) ||
(
			board[x - 3] &&
			board[x - 2] &&
			board[x][y] === board[x - 3][tile1[1]] &&
			board[x][y] === board[x - 2][tile1[1]]
		) ||
(
			board[x + 3] &&
			board[x + 2] &&
			board[x][y] === board[x + 3][tile1[1]] &&
			board[x][y] === board[x + 2][tile1[1]]
		) ||
(
			board[tile1[0]][tile1[1]] === board[x][y - 1] &&
			board[tile1[0]][tile1[1]] === board[x][y + 1]
		)) {
			return true;
		} else if (
			board[tile1[0]][tile1[1]] === board[x][y - 1] &&
			board[tile1[0]][tile1[1]] === board[x][y - 2]
		) {
			console.log(tile1, x, y, 'tile1 y-1 y-2');
			return true;
		} else if (
			board[tile1[0]][tile1[1]] === board[x][y + 1] &&
			board[tile1[0]][tile1[1]] === board[x][y + 2]
		) {
			console.log(tile1, x, y, 'tile1 y+1 y+2');
			return true;
		} else if (
			board[x + 1] &&
			board[x - 1] &&
			board[tile1[0]][tile1[1]] === board[x - 1][y] &&
			board[tile1[0]][tile1[1]] === board[x + 1][y]
		) {
			console.log(tile1, x, y, 'tile1 x-1 x+1');
			return true;
		} else if (
			board[x - 1] &&
			board[x - 2] &&
			board[tile1[0]][tile1[1]] === board[x - 1][y] &&
			board[tile1[0]][tile1[1]] === board[x - 2][y]
		) {
			console.log(tile1, x, y, 'tile1 x-1 x-2');
			return true;
		} else if (
			board[x + 1] &&
			board[x + 2] &&
			board[tile1[0]][tile1[1]] === board[x + 1][y] &&
			board[tile1[0]][tile1[1]] === board[x + 2][y]
		) {
			console.log(tile1, x, y, 'tile1 x+1 x+2');
			return true;
		} else if (
			board[tile1[0]][tile1[1]] === board[x][y - 3] &&
			board[tile1[0]][tile1[1]] === board[x][y - 2]
		) {
			console.log(tile1, x, y, 'tile1 y-3 y-2');
			return true;
		} else if (
			board[tile1[0]][tile1[1]] === board[x][y + 3] &&
			board[tile1[0]][tile1[1]] === board[x][y + 2]
		) {
			console.log(tile1, x, y, 'tile1 y+3 y+2');
			return true;
		} else if (
			board[x - 3] &&
			board[x - 2] &&
			board[tile1[0]][tile1[1]] === board[x - 3][y] &&
			board[tile1[0]][tile1[1]] === board[x - 2][y]
		) {
			console.log(tile1, x, y, 'tile1 x-3 x-2');
			return true;
		} else if (
			board[x + 3] &&
			board[x + 2] &&
			board[tile1[0]][tile1[1]] === board[x + 3][y] &&
			board[tile1[0]][tile1[1]] === board[x + 2][y]
		) {
			console.log(tile1, x, y, 'tile1 x+3 x+2');
			return true;
		}
		return false;
	}
