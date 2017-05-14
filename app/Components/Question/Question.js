import React from 'react'
import './Question.scss'

export const Question = (props) => (
    <div className="question">
        <div className="question__no">
            {props.number})
        </div>
        <div className="question__body">
            <div className="question__context">
                {props.question.ctx}
            </div>
            <div className="question__text">
                {props.question.text}
            </div>
        </div>
    </div>
)