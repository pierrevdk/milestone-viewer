// for better babel ES6 environment
import 'babel-polyfill';

// require all the application styles -> ignored by coverage
/* istanbul ignore next */ import './styles/application';

// import react libs
import React from 'react';
import ReactDOM from 'react-dom';


// import main application components
import Application from './components/application';

import data from './data/m2/index';

// rendering our application
ReactDOM.render(<Application data={data} />, document.getElementById('app'));
