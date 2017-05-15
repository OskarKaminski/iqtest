import { put, takeLatest } from 'redux-saga/effects';
import {getHighScores} from '../API/api';
import {setHighScores} from '../Actions/actions';
import _ from 'lodash';

export function* fetchHighScores() {
    yield takeLatest('FETCH_HIGH_SCORES', function* () {
        const highScores = yield getHighScores();
        const limited = _(highScores)
            .orderBy('result', 'desc')
            .slice(0, 9)
            .value()
        yield put(setHighScores(limited));
        return highScores;
    });
};
