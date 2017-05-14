import React from 'react'
import './Puzzle.scss'

export const Puzzle = (props) =>{
    return (
        <div className="puzzle">
            <div className="puzzle__element firstcolumn">{
                props.one
            }</div>
            <div className="puzzle__element secondcolumn">{
                props.two
            }</div>
            <div className="puzzle__element thridcolumn">{
                props.three
            }</div>
            <div className="puzzle__element fourthcolumn">{
                props.four
            }
            </div>
            <div className="puzzle__element lastcolumn">{
                props.five
            }
            </div>
        </div>
    )
}
