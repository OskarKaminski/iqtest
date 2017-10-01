import React from 'react'
import './timer.scss'

export const Timer = (props) => (
    <div className="timer-wrapper">
        <div className="timmer">
            {props.time}
        </div>
    </div>
)