import React from 'react'
import {Provider, connect} from 'react-redux';
import {store} from './store';
import testCases from './testCases';
import {setTestCases, fetchHighScores, restartTimer, decrementTime} from './Actions/actions'
import {TestCase} from 'C/TestCase/TestCase'
import {Progress} from 'C/Progress/Progress'
import {ThreeTestsHolder} from 'C/ThreeTestsHolder/ThreeTestsHolder'
import {Intro} from 'C/Intro/Intro'
import {Summary} from 'C/Summary/Summary'
import {getTestCases} from './API/api'
import {Timer} from './Components/Timer/timer'

const mapStateToProps = ({testCases, currentTestCase, time}) =>
    ({testCases, currentTestCase,time});

@connect(mapStateToProps, {setTestCases, fetchHighScores, restartTimer, decrementTime})
class App extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchHighScores();
    }

    onStartTest = () => {
        this.props.restartTimer();
        this.props.setTestCases(testCases);
        getTestCases();
    }
    render = () => {
        if (!this.props.testCases[0]) {
            return <Intro startTest={this.onStartTest}/>
        }
        if (this.props.currentTestCase > this.props.testCases.length) {
            return <Summary/>
        }


        if (this.props.testCases[0]) {
            setTimeout(this.props.decrementTime, 1000)    
            return (
                <div>
                    <Timer time={this.props.time}/>
                    <Progress questionNo={this.props.currentTestCase}
                              questionsQty={this.props.testCases.length}/>
                    <ThreeTestsHolder tests={this.props.testCases}
                                      current={this.props.currentTestCase}/>
                </div>
            )
        }
    }
}

export const AppContainer = () => (
    <Provider store={store}>
        <App />
    </Provider>
)