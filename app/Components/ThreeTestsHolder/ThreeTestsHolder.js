import React, {PropTypes} from 'react';
import './ThreeTestsHolder.scss';
import {TestCase} from 'C/TestCase/TestCase';

const createTestCase = (test) => {
    if (test) {
        return <TestCase {...test}/>
    }
}

export const ThreeTestsHolder = (props) => {
    return (
        <div className="three-tests-holder">
            <div className="holder__item holder__item--previous">
                {createTestCase(props.tests[props.current - 2])}
            </div>
            <div className="holder__item holder__item--current">
                {createTestCase(props.tests[props.current - 1])}
            </div>

            <div className="holder__item holder__item--next">
                {createTestCase(props.tests[props.current])}
            </div>
        </div>
    )
}
ThreeTestsHolder.propTypes = {
    tests: PropTypes.array.isRequired,
    current: PropTypes.number.isRequired
}