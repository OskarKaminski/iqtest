import React from 'react'
import './Intro.scss'

export class Intro extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return <div className="intro">
            <span className="intro__title">Witaj w IQ Test</span>
            <button className="start-button" onClick={this.props.startTest}>
                Rozpocznij
            </button>
        </div>
    }
}



