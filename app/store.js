import {createStore, applyMiddleware, compose} from 'redux';
import {reducers} from './reducers';
// import {sagaMiddleware, sagaRunner} from './sagas';

let devtools = window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;

// const middleware = applyMiddleware(sagaMiddleware);
export const store = createStore(reducers, devtools);
// sagaRunner();
