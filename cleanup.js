

export default function cleanUpBoard(board, hidden){
    let newBoard = []
    // let boardMatches = true
    for(let i = 0; i < board.length; i++){
        if(!newBoard[i]){
            newBoard[i] = []
        } 
        // console.log(newBoard)
        for(let j = 0; j < board[i].length; j++){
            if(!newBoard[i][j]){
                newBoard[i][j] = board[i][j]
            } 
            if(board[i][j] !== 0 && j < hidden){
                if(board[i][j-1] === board[i][j] && board[i][j+1]=== board[i][j] && j < hidden-1){
                    newBoard[i][j-1] = 'x'
                    newBoard[i][j]   = 'x'
                    newBoard[i][j+1] = 'x'
                } 
                if(board[i-1] && board[i+1] && board[i-1][j] === board[i][j] && board[i+1][j]=== board[i][j]){
                    newBoard[i-1][j] = 'x'
                    newBoard[i][j]   = 'x'
                    if(!newBoard[i+1]) newBoard[i+1] = []
                    newBoard[i+1][j] = 'x'
                } 
            }
        }
    }
    // for(let k = 0; k < board.length; k++){

    //     // console.log(newBoard)
    //     if(newBoard[k].includes('x')){
    //         boardMatches = false
    //         while(newBoard[k].indexOf('x') !== -1){ //m*n
    //             let currentRow= k
    //             let xIdx = newBoard[k].indexOf('x')
    //             while(newBoard[currentRow]){ //n
    //                 if(!newBoard[currentRow-1]) newBoard[currentRow][xIdx] = 0
    //                 else newBoard[currentRow][xIdx] = newBoard[currentRow-1][xIdx]
    //                 currentRow--
    //             }
    //         }
    //     }
    // }

    return tilesFall(newBoard, newBoard[0].length, hidden)
 
    // if(boardMatches) {
    //     // console.log(newBoard)
    //    return newBoard
    //  } else return cleanUpBoard(newBoard)
}


function tilesFall(board, columLength, hidden){
    let boardMatches = true
    for(let i = 0; i < board.length; i++){
        let pointer = 0
        while(pointer < hidden){
            if(board[i][pointer] === "x"){
                boardMatches = false
                board[i].splice(pointer, 1)
            } else {
                pointer++
            }
        }
        while(board[i].length < columLength){
            board[i].push(0)
        }
    }
    return [board, boardMatches]
}