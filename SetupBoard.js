


const row = 10
const colums = 10

const colors = ['red', 'blue', 'green', 'purple', 'orange']


export default function createGameBoard(rowNum = row, columnNum = colums, styleArr = colors){
    let newBoard = []
    while(newBoard.length < rowNum){
        let rowTiles = []
        while(rowTiles.length < columnNum){
            let tile = Math.floor(Math.random()*styleArr.length)
            rowTiles.push(styleArr[tile])
        }
        newBoard.push(rowTiles)
    }
    return newBoard
}

