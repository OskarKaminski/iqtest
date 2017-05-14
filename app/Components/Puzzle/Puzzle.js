import React from 'react'
import {connect} from 'react-redux'
import {nextTestCase} from 'Actions'
import './Puzzle.scss'

const changer = (number) => {
    return number || <input className="changer_button"
                            type="text"
                            placeholder="?"/>
}

@connect(undefined, {nextTestCase})
export class Puzzle extends React.Component{
    constructor (props){
        super(props)
    }
    
    onEnter(e){
        if(e.keyCode === 13){
            this.props.nextTestCase()
        }
    }

    render(){
        return (
            <div className="puzzle" onKeyDown={this.onEnter.bind(this)}>
                <div className="puzzle__element firstcolumn">
                    {changer(this.props.one)}
                </div>
                <div className="puzzle__element secondcolumn">
                    {changer(this.props.two)}
                </div>
                <div className="puzzle__element thridcolumn">
                    {changer(this.props.three)}
                </div>
                <div className="puzzle__element fourthcolumn">
                    {changer(this.props.four)}
                </div>
                <div className="puzzle__element lastcolumn">
                    {changer(this.props.five)}
                </div>
            </div>
        )
    }
}
