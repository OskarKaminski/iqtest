import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import './Leaderboard.scss'

const mapStateToProps = ({highScores}) => ({highScores});
@connect(mapStateToProps)
export class Leaderboard extends React.Component {
    constructor (props) {
        super(props)
    }

    showHighScores (highScores) {
        return highScores && _.map(highScores, (score, key) => (
                <tr key={key}>
                    <td className="leaderboard__cell">{score.email}</td>
                    <td className="leaderboard__cell">{score.result}</td>
                </tr>
            ))
    }

    render = () => (
        <div className="leaderboad">
            <table className="leaderboard__table">
                <tbody>
                <tr>
                    <th className="leaderboard__cell">Login</th>
                    <th className="leaderboard__cell">Result</th>
                </tr>
                {this.showHighScores(this.props.highScores)}
                </tbody>
            </table>
        </div>
    )
}