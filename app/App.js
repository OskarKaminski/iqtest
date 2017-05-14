import React from 'react'
import {Provider, connect} from 'react-redux';
import {store} from './store';
import testCases from './testCases';
import {setTestCases} from './Actions/actions'
import {TestCase} from 'C/TestCase/TestCase'
import {Progress} from 'C/Progress/Progress'
import {ThreeTestsHolder} from 'C/ThreeTestsHolder/ThreeTestsHolder'

const mapStateToProps = ({testCases, currentTestCase}) =>
    ({testCases, currentTestCase});

@connect(mapStateToProps, {setTestCases})
class App extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.setTestCases(testCases);
    }

    renderTestCase = (testCases) => {
        return this.props.testCases[0] ?
            <ThreeTestsHolder tests={testCases}
                              current={this.props.currentTestCase}/> : null
    }

    render = () => (
        <div>
            <Progress questionNo={this.props.currentTestCase}
                      questionsQty={this.props.testCases.length}/>
            {this.renderTestCase(this.props.testCases)}
        </div>
    )
}

export const AppContainer = () => (
    <Provider store={store}>
        <App />
    </Provider>
)