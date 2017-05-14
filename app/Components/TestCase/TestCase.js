import React, {PropTypes} from 'react'
import './TestCase.scss'
import {connect} from 'react-redux'
import {Option} from 'C/Option/Option'
import {Question} from 'C/Question/Question'
import {Puzzle} from 'C/Puzzle/Puzzle'
import {nextTestCase, setAnswer} from 'Actions'

const renderAnswersByType = (options, type, answer, onAnswer) => {
    if (type === 'puzzle') {
        return <Puzzle {...options}
                       answer={answer}
                       onAnswer={onAnswer}/>
    }
    if (type === 'list') {
        return options.map((option, key) => {
            return <Option value={option}
                           answer={answer}
                           key={key}
                           onAnswer={onAnswer}/>
        })
    }
}

@connect(undefined, {nextTestCase, setAnswer})
export class TestCase extends React.Component {
    constructor (props) {
        super(props)
    }

    onAnswer = (value) => {
        this.props.setAnswer(value, this.props.number)
        this.props.nextTestCase()
    }

    render () {
        return <div className="test-case__wrapper">
            <div className="test-case">
                <div className="test-case__question">
                    <Question question={this.props.question} number={this.props.number}/>
                </div>

                <div className="answers">
                    {renderAnswersByType(this.props.options,
                        this.props.type,
                        this.props.answer,
                        this.onAnswer)}
                </div>
            </div>
        </div>
    }
}

TestCase.propTypes = {
    question: PropTypes.object.isRequired,
    options: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired,
    number: PropTypes.number.isRequired
}