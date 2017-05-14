import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import {AppContainer} from './App';

const render = () => {
    ReactDOM.render(
        <AppContainer/>,
        document.getElementById('root')
    );
}

render();

if (module.hot) {
    module.hot.accept('./App', () => {
        render()
    });
}
