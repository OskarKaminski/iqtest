import React from 'react'
import './Progress.scss'

export const Progress = (props) => (
    <div className="progress-wrapper">
        <div className="progress">
            {props.questionNo + '/' + props.questionsQty}
        </div>
    </div>
)