import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import {Integrations} from "@sentry/tracing";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux";
import storeCreator from "./store";

const store = storeCreator();

Sentry.init({
    dsn: "https://e0b1fa9efcf1487e94f4c690b43f0a59@sentry.daily-do.ir/5",
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
