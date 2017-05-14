import {combineReducers} from 'redux';
import {testCases, currentTestCase} from './Reducers/testCases';

export const reducers = combineReducers({
    testCases,
    currentTestCase,
    // points,
    // time
});
