import createSagaMiddleware from 'redux-saga';
import {fetchConfigurationSaga} from './Code/saga';
import {fetchPackagesSaga} from './InsurancePackages/sagas';

export const sagaMiddleware = createSagaMiddleware();

export const sagaRunner = () => {
    sagaMiddleware.run(fetchConfigurationSaga);
    sagaMiddleware.run(fetchPackagesSaga);
};
