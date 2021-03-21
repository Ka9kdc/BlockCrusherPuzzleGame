
const row = 10





export default function createGameBoard(rowNum = row, styleNum = 4){
    let newBoard = []
    const columnNum = rowNum*5
    while(newBoard.length < rowNum){
        let rowTiles = new Array(columnNum)
        for(let i = 0; i < columnNum; i++){
            let tile = Math.ceil(Math.random()*styleNum)
            while((i > 1 && rowTiles[i-1] === tile && rowTiles[i-2] === tile) || (newBoard[newBoard.length-2] && newBoard[newBoard.length-1][i] === tile && newBoard[newBoard.length-2][i] === tile)){
                tile--
                if(tile === 0) tile = styleNum
            }
            rowTiles[i] = tile
        }
        newBoard.push(rowTiles)
    }

    return newBoard
}

