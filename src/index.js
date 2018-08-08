import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
