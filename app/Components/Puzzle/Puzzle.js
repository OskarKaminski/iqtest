import React from 'react'
import './Puzzle.scss'

const changer = (number) => {
    return number || <input className="changer_button" type="text" placeholder="?"/>
}


export const Puzzle = (props) => {
    return (
        <div className="puzzle">
            <div className="puzzle__element firstcolumn">
                {changer(props.one)}
            </div>
            <div className="puzzle__element secondcolumn">
                {changer(props.two)}
            </div>
            <div className="puzzle__element thridcolumn">
                {changer(props.three)}
            </div>
            <div className="puzzle__element fourthcolumn">
                {changer(props.four)}
            </div>
            <div className="puzzle__element lastcolumn">
                {changer(props.five)}
            </div>
        </div>
    )
}
