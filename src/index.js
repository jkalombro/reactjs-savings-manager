import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//my imports
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Store related
import Store from './models/root.store';
const store = Store.create({});

ReactDOM.render(<App store={store} />, document.getElementById('root'));
serviceWorker.unregister();
