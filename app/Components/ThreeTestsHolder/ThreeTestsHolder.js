import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './ThreeTestsHolder.scss';
import {previousTestCase, nextTestCase} from '../../Actions/actions'
import {TestCase} from 'C/TestCase/TestCase';

const createTestCase = (test) => {
    if (test) {
        return <TestCase {...test}/>
    }
}

@connect(undefined, {nextTestCase, previousTestCase})
export class ThreeTestsHolder extends React.Component {
    constructor (props){
        super(props);
    }
    componentDidMount(){
        document.addEventListener("keydown", this.arrowListeners)
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.arrowListeners)
    }
    arrowListeners = (e) => {
        if(e.keyCode === 39){
            this.props.nextTestCase(this.props.tests.length);
        }
        if(e.keyCode === 37){
            this.props.previousTestCase(1);
        }
    }
    render = () => (
        <div className="three-tests-holder">
            <div className="holder__item holder__item--previous">
                {createTestCase(this.props.tests[this.props.current - 2])}
            </div>
            <div className="holder__item holder__item--current">
                {createTestCase(this.props.tests[this.props.current - 1])}
            </div>

            <div className="holder__item holder__item--next">
                {createTestCase(this.props.tests[this.props.current])}
            </div>
        </div>
    )
}
ThreeTestsHolder.propTypes = {
    tests: PropTypes.array.isRequired,
    current: PropTypes.number.isRequired
}