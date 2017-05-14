import React from 'react'
import './TestCase.scss'
import {Answer} from 'C/Answer/Answer'
import {Question} from 'C/Question/Question'

const renderAnswers = (answers) => {
    return answers.map((answer, key) => (
        <Answer {...answer} key={key}/>
    ))
}

export const TestCase = (props) => (
    <div className="test-case__wrapper">
        <div className="test-case">
            <div className="test-case__question">
                <Question question={props.question} number={props.number}/>
            </div>

            <div className="answers">
                {renderAnswers(props.answers)}
            </div>
        </div>
    </div>
)