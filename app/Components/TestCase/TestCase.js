import React, {PropTypes} from 'react'
import './TestCase.scss'
import {Option} from 'C/Option/Option'
import {Question} from 'C/Question/Question'
import {Puzzle} from 'C/Puzzle/Puzzle'

const renderAnswersByType = (options, type, answer) => {
    if (type === 'puzzle') {
        return <Puzzle {...options} answer={answer}></Puzzle>
    }
    if(type === 'list'){
        return options.map((option, key) => {
            return <Option {...option} key={key}/>
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
                {renderAnswersByType(props.options, props.type, props.answer)}
            </div>
        </div>
    </div>
)

TestCase.propTypes = {
    question: PropTypes.object.isRequired,
    options: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired,
    number: PropTypes.number.isRequired
}