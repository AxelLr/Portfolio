import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { TotalContainer } from './components/total-container/TotalContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TotalContainer />, document.getElementById('root'));

serviceWorker.unregister();
