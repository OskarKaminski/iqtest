import React from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames';
import './Option.scss'
import {nextTestCase, setAnswer} from 'Actions'

@connect(undefined, {nextTestCase, setAnswer})
export class Option extends React.Component {
    constructor (props) {
        super(props);
    }

    next = (value) => {
        this.props.onAnswer(value)
    }

    render = () => (
        <div className="option__wrapper">
            <div className={classNames('option',
                {'option--checked': this.props.answer === this.props.value})}
                 onClick={this.next.bind(this, this.props.value)}>
                    {this.props.value}
            </div>
        </div>
    )
}