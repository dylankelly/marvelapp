import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './service-worker-registration';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
