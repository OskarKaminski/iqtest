import React from 'react'
import './Intro.scss'

export const Intro = (props) => (
    <div className="intro">
        <span className="intro__title">Witaj w IQ Test</span>
        <button className="start-button" onClick={props.startTest}>
            Rozpocznij
        </button>
    </div>
)



