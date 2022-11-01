import React from 'react';
import ReactDOM from 'react-dom';

/* Provider allows us to englobe App Container and pass down props in a redux model */
import { Provider } from 'react-redux';

import {store} from './store';


import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';


/* wrapping the App within the Provider component passes down the store in all the other components contained in the App Component */
ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
