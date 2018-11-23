import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';

/* 
React HashRouter listens to events on change routes and initiates an
action thereafter e.g display the requested route
 */
const App = () => {
    return(
        <HashRouter>
            <Routes/>
        </HashRouter>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
