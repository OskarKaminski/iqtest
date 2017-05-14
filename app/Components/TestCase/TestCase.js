import React, {PropTypes} from 'react'
import './TestCase.scss'
import {Answer} from 'C/Answer/Answer'
import {Question} from 'C/Question/Question'
import {Puzzle} from 'C/Puzzle/Puzzle'

export const TestCase = (props) => (
    <div className="test-case__wrapper">
        <div className="test-case">
            <div className="test-case__question">
                <Question question={props.question} number={props.number}/>
            </div>

            <div className="answers">
                <Puzzle one={props.answers.one}
                        two={props.answers.two}
                        three={props.answers.three}
                        four={props.answers.four}
                        five={props.answers.five}></Puzzle>
            </div>
        </div>
    </div>
)

TestCase.propTypes = {
    question: PropTypes.object.isRequired,
    answers: PropTypes.array.isRequired,
    number: PropTypes.number.isRequired
}