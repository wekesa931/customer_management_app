import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/home';
import Layout from './HOC/Layout/layout';

/*
This is the ROutes module where all the paths to the pages of the application will be defined.
For now we only have the home page

React alows us to develop and deploy single page applications which are not only easy to manage 
but also save a lot of time when working around them
*/
export default class Routes extends Component {
  render() {
    return (
        <Layout>
          <Switch>
              <Route path="/" exact component={Home}/>
          </Switch>
        </Layout>
        
        
    )
  }
}
