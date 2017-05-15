import createSagaMiddleware from 'redux-saga';
import {fetchHighScores} from './Sagas/highScores';

export const sagaMiddleware = createSagaMiddleware();

export const sagaRunner = () => {
    sagaMiddleware.run(fetchHighScores);
};
