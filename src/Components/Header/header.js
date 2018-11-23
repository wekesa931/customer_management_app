/* the Header modules handles al the logic and JSX for the 
header in the DOM. It does this by receiving all the modules
concerned with the header and renders them */


import React from 'react';
import './header.css';
import FontAwesome from 'react-fontawesome';
import SideNavigation from './SideNav/sidenav';
import { Link } from 'react-router-dom'

const Header = (props) => {


const logo = ()=>{
    return(
        <div className='main-logo'>
            <img src="./images/transparent_logo.png" alt="logo"/>
        </div>
    )
}

const navBars = ()=>{
    return(
        <div className='bars'>
            <FontAwesome name='bars'
                onClick={props.onOpenNav}
                style={{
                    margin: '6vw 0 0 4vw',
                    cursor: 'pointer',
                    fontSize: '6vw'
                }}
            />
        </div>
    )
}

/* Here the header naviagation items are defined. these can be easily added in case the 
user's needs change. 

the biggest advantage of this mode of development is creating reusable code*/

const kenya = ()=> <div className='nav-links'><Link to ='/blank'>KENYA</Link></div>
   
const uganda = ()=><div className='nav-links'><Link to='/blank'>UGANDA</Link></div>

const userPic = ()=><div className='user-pic-holder'><p style={{paddingTop: '97%',opacity:'0'}}>Log Out</p></div>

    return (
        <header className='header'>
            <SideNavigation {...props}/>
            <div className='header-options'>
                {navBars()}
                {logo()}
                {kenya()}
                {uganda()}
                {userPic()}
            </div>

        </header>
        
    );
};

export default Header;