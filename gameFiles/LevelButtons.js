import React from 'react'

export default function LevelButtons(props){
    function startGame(rows, colors){
        props.setRowNum(rows)
        props.setColorNum(colors)
        props.setHidden(rows)
        props.newGame(rows, colors)
    }

    return (
        <div>
            <button type="button" onClick={() => startGame(6, 3)} >Three Colors</button>
            <button type="button" onClick={() => startGame(10, 4)}>Four Colors</button>
            <button type="button" onClick={() => startGame(10, 5)}>Five Colors</button>
            <button type="button" onClick={() => startGame(10, 6)}>Six Colors</button>
            <button type="button" onClick={() => startGame(15, 7)}>Seven Colors</button>
            <button type="button" onClick={() => startGame(15, 8)}>Eight Colors</button>
            <button type="button" onClick={() => startGame(15, 9)}>Nine Colors</button>
        </div>
    )
}