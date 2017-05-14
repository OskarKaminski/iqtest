import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {nextTestCase, setAnswer} from 'Actions'
import './Puzzle.scss'

@connect(undefined, {nextTestCase, setAnswer})
export class Puzzle extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            center: props.answer || '?'
        }
    }
    
    onChange(e){
        this.setState({
            center: e.target.value
        })
    }
    onEnter(e){
        if(e.keyCode === 13){
            this.props.setAnswer(this.state.center, 2)
            this.props.nextTestCase()
        }
    }
    removeValue(){
        if(this.state.center === '?'){
            this.setState({
                center: ''
            })
        }
    }

    render(){
        return (
            <div className="puzzle">
                <div className="puzzle__element firstcolumn">
                    {this.props.top}
                </div>
                <div className="puzzle__element secondcolumn">
                    {this.props.left}
                </div>
                <div className="puzzle__element thridcolumn">
                    <input className="changer_button"
                           type="text"
                           onClick={this.removeValue.bind(this)}
                           onChange={this.onChange.bind(this)}
                           onKeyDown={this.onEnter.bind(this)}
                           value={this.state.center}/>
                </div>
                <div className="puzzle__element fourthcolumn">
                    {this.props.right}
                </div>
                <div className="puzzle__element lastcolumn">
                    {this.props.bottom}
                </div>
            </div>
        )
    }
}
Puzzle.propTypes = {
    answer: PropTypes.number
}