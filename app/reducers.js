import {combineReducers} from 'redux';
import {testCases, currentTestCase} from './Reducers/testCases';
import {highScores} from './Reducers/highScores';
import {timer} from './Reducers/timer';

export const reducers = combineReducers({
    testCases,
    currentTestCase,
    highScores,
    time: timer
});
