import React from 'react';
import 'styles/index.css';
// eslint-disable-next-line import/no-unresolved
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "store/store";


const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <Provider store={store}>
                <App/>
        </Provider>
    </BrowserRouter>,
);