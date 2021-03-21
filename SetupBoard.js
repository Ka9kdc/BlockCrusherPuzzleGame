
const row = 10
const colums = 10




export default function createGameBoard(rowNum = row, columnNum = colums, styleNum = 4){
    let newBoard = []
    while(newBoard.length < rowNum){
        let rowTiles = new Array(columnNum)
        for(let i = 0; i < columnNum; i++){
            let tile = Math.ceil(Math.random()*styleNum)
            if(i > 1 && rowTiles[i-1] === tile && rowTiles[i-2] === tile){
                tile--
                if(tile === 0) tile = styleNum
            }
            rowTiles[i] = tile
        }
        newBoard.push(rowTiles)
    }

    return newBoard
}

