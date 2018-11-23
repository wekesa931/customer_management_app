import React, { Component } from 'react';
import './layout.css';

/* THis is a Higher Order Component meaning that we can use it to specify the 
order of how modules are rendered on the app screen */


/* Specify the modules to be imported and thier ocations */
import Header from '../../Components/Header/header';
import SideNavDiv from '../../Components/Header/SideNav/SidenavDiv/sidenav_div';



class Layout extends Component {
    /*
    React components use state to detect changes in the dom and hence render the 
    application afresh with the new changes included
    */
    state={
        showNav: false
    }

    /* 
    Function that enables us toggle the state (tre or false) hence
    controlling when the side navigation is opened
        */
    toggleSideNav = (action)=>{
        this.setState({
            showNav:action
        })
    }
    /* Render is used to embed the JSX into the DOM */
    render() {
        return (
            <div>
                <SideNavDiv/>
                <Header 
                    showNav = {this.state.showNav}
                    onHideNav = {()=>this.toggleSideNav(false)}
                    onOpenNav = {()=>this.toggleSideNav(true)}
                />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;