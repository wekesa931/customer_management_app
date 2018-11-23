import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

/* 
React BrouwserRouter listens to events on change routes and initiates an
action thereafter e.g display the requested route
 */
const App = () => {
    return(
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
