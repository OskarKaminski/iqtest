import React from 'react'
import {connect} from 'react-redux'
import './Summary.scss'
import _ from 'lodash'
import {saveResult} from '../../API/api'
import {Leaderboard} from '../Leaderboard/Leaderboard'

const mapStateToProps = ({testCases}) => ({testCases});
@connect(mapStateToProps)
export class Summary extends React.Component {
    constructor (props) {
        super(props);
        const correctAnswers = [10, 15, 33];
        this.averageResult = 2;
        this.points = _.reduce(props.testCases, (acc, curr, i) => {
            return curr.answer === correctAnswers[i] ? acc + 1 : acc;
        }, 0)
        saveResult(this.points, 'priv.oskar@gmail.com')
    }

    render () {
        return <div className="summary">
            <span className="summary__score">
                Your IQ is {this.points * 100 / this.averageResult}
            </span>
            <Leaderboard/>
        </div>
    }
}


