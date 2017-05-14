import React, {PropTypes} from 'react'
import './TestCase.scss'
import {Answer} from 'C/Answer/Answer'
import {Question} from 'C/Question/Question'
import {Puzzle} from 'C/Puzzle/Puzzle'

const renderAnswersByType = (answers, type) => {
    if (type === 'puzzle') {
        return <Puzzle one={answers.one}
                two={answers.two}
                three={answers.three}
                four={answers.four}
                five={answers.five}></Puzzle>
    }
    if(type === 'list'){
        return answers.map((answer, key) => {
            return <Answer {...answer} key={key}/>
        })
    }
}

export const TestCase = (props) => (
    <div className="test-case__wrapper">
        <div className="test-case">
            <div className="test-case__question">
                <Question question={props.question} number={props.number}/>
            </div>

            <div className="answers">
                {renderAnswersByType(props.answers, props.type)}
            </div>
        </div>
    </div>
)

TestCase.propTypes = {
    question: PropTypes.object.isRequired,
    answers: PropTypes.array.isRequired,
    number: PropTypes.number.isRequired
}