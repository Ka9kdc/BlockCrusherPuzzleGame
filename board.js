import React, { useReducer, useState } from 'react'
import cleanUpBoard from './cleanup'
import { useEffect } from './dist/bundle'
import createGameBoard from './SetupBoard'

function gameReducer(state = initialboard, action){
    console.log(action)
    switch (action.type){
        case "New Game":
            const newBoard = createGameBoard()
            return newBoard
        case "Move":
            const temp = state[action.tile1[0]][action.tile1[1]]
            state[action.tile1[0]][action.tile1[1]] = state[action.tile2[0]][action.tile2[1]]
            state[action.tile2[0]][action.tile2[1]] = temp
            const nextBoard = cleanUpBoard(state)
            return nextBoard
        case "Clean UP":
            const nexBoard = cleanUpBoard(state)
            return nexBoard
        default:
            return state
    }
}

const initialboard = createGameBoard()

export default function Board(props){
    const [tile1, setTile1] = useState([])
    const [state, dispatch] = useReducer(gameReducer, initialboard)


    function validateMove(x,y){
        if(tile1.length === 0){
            setTile1([x,y])
        } else if((state[x][y] !== 0 || state.length-1 === x) && ((Math.abs(x - tile1[0]) === 1 && Math.abs(y - tile1[1]) === 0) || (Math.abs(x - tile1[0]) === 0 && Math.abs(y - tile1[1]) === 1)) && checkMove(x,y)){
            const action = {
               type: 'Move',
               tile1,
               tile2: [x,y]
           }
           dispatch(action)
           setTile1([])
        } else {
            setTile1([])
        }
    }
    
    function checkMove(x,y){
        if(state[x][y] === state[tile1[0]][y-1] && state[x][y] === state[tile1[0]][y+1]){
            return true
        }else  if(state[x][y] === state[tile1[0]][y-1] && state[x][y] === state[tile1[0]][y-2]){
            return true
        }else  if(state[x][y] === state[tile1[0]][y+1] && state[x][y] === state[tile1[0]][y+2]){
            return true
        }else  if(state[x+1] && state[x-1] && state[x][y] === state[x-1][tile1[1]] && state[x][y] === state[x+1][tile1[1]]){
            return true
        }else  if(state[x-1] && state[x-2] && state[x][y] === state[x-1][tile1[1]] && state[x][y] === state[x-2][tile1[1]]){
            return true
        }else  if(state[x+1] && state[x+2] && state[x][y] === state[x+1][tile1[1]] && state[x][y] === state[x+2][tile1[1]]){
            return true
        } 

        else  if(state[x][y] === state[tile1[0]][y-3] && state[x][y] === state[tile1[0]][y-2]){
            return true
        }else  if(state[x][y] === state[tile1[0]][y+3] && state[x][y] === state[tile1[0]][y+2]){
            return true
        }else  if(state[x-3] && state[x-2] && state[x][y] === state[x-3][tile1[1]] && state[x][y] === state[x-2][tile1[1]]){
            return true
        }else  if(state[x+3] && state[x+2] && state[x][y] === state[x+3][tile1[1]] && state[x][y] === state[x+2][tile1[1]]){
            return true
        } 
        
        else if(state[tile1[0]][tile1[1]] === state[x][y-1] && state[tile1[0]][tile1[1]] === state[x][y+1]){
            return true
        }else if(state[tile1[0]][tile1[1]] === state[x][y-1] && state[tile1[0]][tile1[1]] === state[x][y-2]){
            return true
        }else if(state[tile1[0]][tile1[1]] === state[x][y+1] && state[tile1[0]][tile1[1]] === state[x][y+2]){
            return true
        } else  if(state[x+1] && state[x-1] && state[tile1[0]][tile1[1]] === state[x-1][y] && state[tile1[0]][tile1[1]] === state[x+1][y]){
            return true
        }else  if(state[x-1] && state[x-2] && state[tile1[0]][tile1[1]] === state[x-1][y] && state[tile1[0]][tile1[1]] === state[x-2][y]){
            return true
        }else  if(state[x+1] && state[x+2] && state[tile1[0]][tile1[1]] === state[x+1][y] && state[tile1[0]][tile1[1]] === state[x+2][y]){
            return true
        }

        else if(state[tile1[0]][tile1[1]] === state[x][y-3] && state[tile1[0]][tile1[1]] === state[x][y-2]){
            return true
        }else if(state[tile1[0]][tile1[1]] === state[x][y+3] && state[tile1[0]][tile1[1]] === state[x][y+2]){
            return true
        } else  if(state[x-3] && state[x-2] && state[tile1[0]][tile1[1]] === state[x-3][y] && state[tile1[0]][tile1[1]] === state[x-2][y]){
            return true
        }else  if(state[x+3] && state[x+2] && state[tile1[0]][tile1[1]] === state[x+3][y] && state[tile1[0]][tile1[1]] === state[x+2][y]){
            return true
        }
        return false

    }
    
    const colors = ["white", 'red', 'blue', 'green', 'purple', 'orange', 'pink', 'yellow', 'gray']
    const hidden = 10
    return (
        <div className="game_board">
            {state.length && state.map((row, rowIdx) => {
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
