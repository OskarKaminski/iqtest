import React from 'react'
import {Provider, connect} from 'react-redux';
import {store} from './store';
import {setTestCases} from './Actions/actions'
import {TestCase} from 'C/TestCase/TestCase'
import {Progress} from 'C/Progress/Progress'

const mapStateToProps = ({testCases, currentTestCase}) =>
    ({testCases, currentTestCase});

@connect(mapStateToProps, {setTestCases})
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setTestCases([{
            number: 1,
            question: {
                ctx: '1, 2, 3, 4, 5,',
                text: 'What is the next number?'
            },
            answers: {
                one: 3,
                two: 10,
                three: 6,
                four: 100,
                five: 100
            }
        }]);
    }

    renderTestCase = (testCases) => {
        const testCaseIndex = this.props.currentTestCase - 1
        if (!testCases[testCaseIndex]) return;

        return <TestCase {...testCases[testCaseIndex]}/>
    }

    render = () => (
        <div>
            <Progress questionNo={this.props.currentTestCase}
                      questionsQty={15}/>
            {this.renderTestCase(this.props.testCases)}
        </div>
    )
}

export const AppContainer = () => (
    <Provider store={store}>
        <App />
    </Provider>
)