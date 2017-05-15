import {combineReducers} from 'redux';
import {testCases, currentTestCase} from './Reducers/testCases';
import {highScores} from './Reducers/highScores';

export const reducers = combineReducers({
    testCases,
    currentTestCase,
    highScores
    // time
});
