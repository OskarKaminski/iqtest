import React from 'react'
import {Provider, connect} from 'react-redux';
import {store} from './store';
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
        this.props.setTestCases([{
            number: 1,
            question: {
                ctx: '1, 2, 3, 4, 5,',
                text: 'What is the next number?'
            },
            answers: [
                {label: 3},
                {label: 10},
                {label: 6},
                {label: 100}
            ]
        },
            {
                number: 2,
                question: {
                    ctx: '2, 4, 6, 8,',
                    text: 'What is the next number?'
                },
                answers: [
                    {label: 9},
                    {label: 10},
                    {label: 12},
                    {label: 8}
                ]
            },
            {
                number: 3,
                question: {
                    ctx: '3, 5, 9, 17,',
                    text: 'What is the next number?'
                },
                answers: [
                    {label: 40},
                    {label: 20},
                    {label: 33},
                    {label: 54}
                ]
            }]);
    }

    renderTestCase = () => {
        return this.props.testCases[0] ?
            <ThreeTestsHolder tests={this.props.testCases}
                              current={this.props.currentTestCase}/> : null
    }

    render = () => (
        <div>
            <Progress questionNo={this.props.currentTestCase}
                      questionsQty={15}/>
            {this.renderTestCase()}
        </div>
    )
}

export const AppContainer = () => (
    <Provider store={store}>
        <App />
    </Provider>
)