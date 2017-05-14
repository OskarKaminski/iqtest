import React from 'react'
import './Progress.scss'

export const Progress = (props) => (
    <div className="progress-wrapper">
        <div className="progress">
            <span className="progress__question-no">
                {props.questionNo}
            </span> /
                <span className="progress__questions-qty">
                {props.questionsQty}
            </span>
        </div>
    </div>
)