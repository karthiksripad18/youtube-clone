import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './_base.scss';

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>,
document.getElementById("root"));