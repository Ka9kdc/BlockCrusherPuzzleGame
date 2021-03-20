import React from 'react'
import createGameBoard from './SetupBoard'

// function gameReducer(state = initialboard, action){
//     switch (action.type){
//         case "New Game":
//             const newBoard = createGameBoard()
//             return newBoard
//         case "Move":
//             const temp = state[action.tile1[0]][action.tile1[1]]
//             state[action.tile1[0]][action.tile[1]] = state[action.tile2[0]][action.tile2[1]]
//             state[action.tile2[0]][action.tile2[1]] = temp
            
//     }
// }

const initialboard = createGameBoard()

export default function Board(props){

    return (
        <div>
            {initialboard.length && initialboard.map((row, rowIdx) => (
                <div>
                    Row - {rowIdx}
                    {row.length && row.map((tile, columnIdx) => (
                        <span className={tile} key={`${rowIdx} ${columnIdx}`}>{tile} {rowIdx} {columnIdx} </span>
                    ))}

                </div>
            ))  }
        </div>
    )
}
