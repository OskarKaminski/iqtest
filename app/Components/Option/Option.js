import React from 'react'
import {connect} from 'react-redux'
import './Option.scss'
import {nextTestCase} from 'Actions'

@connect(undefined, {nextTestCase})
export class Option extends React.Component {
    constructor (props) {
        super(props);
    }

    next = (value) => {
        this.props.nextTestCase(value)
    }

    render = () => (
        <div className="option__wrapper">
            <div className="option"
                 onClick={this.next.bind(this, this.props.label)}>
                {this.props.label}
            </div>
        </div>
    )
}