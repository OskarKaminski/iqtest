import React from 'react'
import {connect} from 'react-redux'
import './Answer.scss'
import {nextTestCase} from 'Actions'

@connect(undefined, {nextTestCase})
export class Answer extends React.Component {
    constructor (props) {
        super(props);
    }

    next = (value) => {
        this.props.nextTestCase(value)
    }

    render = () => (
        <div className="answer__wrapper">
            <div className="answer"
                 onClick={this.next.bind(this, this.props.label)}>
                {this.props.label}
            </div>
        </div>
    )
}