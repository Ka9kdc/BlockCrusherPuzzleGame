import React, { useState, useEffect } from 'react'
import cleanUpBoard from './cleanup'
import createGameBoard from './SetupBoard'


const initialboard = createGameBoard()

export default function BoardTwo(props){
    const [tile1, setTile1] = useState([])
    const [board, setBoard] = useState(initialboard)
    const [matchs, setMatchs] = useState(true)

    useEffect(() => {
        console.log("effect")
        if(!matchs){ 
            setTimeout(() => {
                 const [nextBoard, newMatchs] = cleanUpBoard(board, hidden)
        setBoard(nextBoard)
        setMatchs(newMatchs)
            }, 300);
           }
    }, [board, matchs])

    function validateMove(x,y){
        if(tile1.length === 0){
            setTile1([x,y])
        } else if((board[x][y] !== 0 || board.length-1 === x) && ((Math.abs(x - tile1[0]) === 1 && Math.abs(y - tile1[1]) === 0) || (Math.abs(x - tile1[0]) === 0 && Math.abs(y - tile1[1]) === 1)) && checkMove(x,y)){
           const temp = board[tile1[0]][tile1[1]]
           board[tile1[0]][tile1[1]] = board[x][y]
           board[x][y] = temp
           const [nextBoard, newMatchs] = cleanUpBoard(board, hidden)
           setBoard(nextBoard)
           setTile1([])
           setMatchs(newMatchs)
        } else {
            setTile1([])
        }
    }
    
    function checkMove(x,y){
        if(board[x][y] === board[tile1[0]][y-1] && board[x][y] === board[tile1[0]][y+1]){
            return true
        }else  if(board[x][y] === board[tile1[0]][y-1] && board[x][y] === board[tile1[0]][y-2]){
            return true
        }else  if(board[x][y] === board[tile1[0]][y+1] && board[x][y] === board[tile1[0]][y+2]){
            return true
        }else  if(board[x+1] && board[x-1] && board[x][y] === board[x-1][tile1[1]] && board[x][y] === board[x+1][tile1[1]]){
            return true
        }else  if(board[x-1] && board[x-2] && board[x][y] === board[x-1][tile1[1]] && board[x][y] === board[x-2][tile1[1]]){
            return true
        }else  if(board[x+1] && board[x+2] && board[x][y] === board[x+1][tile1[1]] && board[x][y] === board[x+2][tile1[1]]){
            return true
        } 

        else  if(board[x][y] === board[tile1[0]][y-3] && board[x][y] === board[tile1[0]][y-2]){
            return true
        }else  if(board[x][y] === board[tile1[0]][y+3] && board[x][y] === board[tile1[0]][y+2]){
            return true
        }else  if(board[x-3] && board[x-2] && board[x][y] === board[x-3][tile1[1]] && board[x][y] === board[x-2][tile1[1]]){
            return true
        }else  if(board[x+3] && board[x+2] && board[x][y] === board[x+3][tile1[1]] && board[x][y] === board[x+2][tile1[1]]){
            return true
        } 
        
        else if(board[tile1[0]][tile1[1]] === board[x][y-1] && board[tile1[0]][tile1[1]] === board[x][y+1]){
            console.log(tile1, x, y, "tile1 y+1 y-1")
            return true
        }else if(board[tile1[0]][tile1[1]] === board[x][y-1] && board[tile1[0]][tile1[1]] === board[x][y-2]){
            console.log(tile1, x, y, "tile1 y-1 y-2")
            return true
        }else if(board[tile1[0]][tile1[1]] === board[x][y+1] && board[tile1[0]][tile1[1]] === board[x][y+2]){
            console.log(tile1, x, y, "tile1 y+1 y+2")
            return true
        } else  if(board[x+1] && board[x-1] && board[tile1[0]][tile1[1]] === board[x-1][y] && board[tile1[0]][tile1[1]] === board[x+1][y]){
            console.log(tile1, x, y, "tile1 x-1 x+1")
            return true
        }else  if(board[x-1] && board[x-2] && board[tile1[0]][tile1[1]] === board[x-1][y] && board[tile1[0]][tile1[1]] === board[x-2][y]){
            console.log(tile1, x, y, "tile1 x-1 x-2")
            return true
        }else  if(board[x+1] && board[x+2] && board[tile1[0]][tile1[1]] === board[x+1][y] && board[tile1[0]][tile1[1]] === board[x+2][y]){
            console.log(tile1, x, y, "tile1 x+1 x+2")
            return true
        }

        else if(board[tile1[0]][tile1[1]] === board[x][y-3] && board[tile1[0]][tile1[1]] === board[x][y-2]){
            console.log(tile1, x, y, "tile1 y-3 y-2")
            return true
        }else if(board[tile1[0]][tile1[1]] === board[x][y+3] && board[tile1[0]][tile1[1]] === board[x][y+2]){
            console.log(tile1, x, y, "tile1 y+3 y+2")
            return true
        } else  if(board[x-3] && board[x-2] && board[tile1[0]][tile1[1]] === board[x-3][y] && board[tile1[0]][tile1[1]] === board[x-2][y]){
            console.log(tile1, x, y, "tile1 x-3 x-2")
            return true
        }else  if(board[x+3] && board[x+2] && board[tile1[0]][tile1[1]] === board[x+3][y] && board[tile1[0]][tile1[1]] === board[x+2][y]){
            console.log(tile1, x, y, "tile1 x+3 x+2")
            return true
        }
        return false

    }
    
    const colors = ["white", 'red', 'blue', 'green', 'purple', 'orange', 'pink', 'yellow', 'gray']
    const hidden = 10
    return (
        <div className="game_board">
            {board.length && board.map((row, rowIdx) => {
                return (
                <div key={`row-${rowIdx}`} className="row" >
                    Row - {rowIdx}
                    {row.length && row.map((tile, columnIdx) => {
                        if(columnIdx < hidden) {
                         if(rowIdx === tile1[0] && columnIdx=== tile1[1]){
                         return  <div className={`${colors[tile]} tile selected `} key={`${rowIdx} ${columnIdx}`}>{tile} </div>
                     }
                    return (
                        <div className={`${colors[tile]} tile`} key={`${rowIdx} ${columnIdx}`} onClick={() => validateMove(rowIdx, columnIdx)}>{tile} </div>
                    )}})}

                </div>
            )})  }
        </div>
    )
}
