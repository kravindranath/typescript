import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

var elem:any = document.getElementById('app');
ReactDOM.render(<App heading="my heading" />, elem);
