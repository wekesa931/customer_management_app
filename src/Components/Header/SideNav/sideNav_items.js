/* 
    This module contains all the items on the side navigation.

    I used FontAwesome dependency which contains all the icons I need for 
    the side navigation items
*/

import React from 'react';
import './sideNav.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';



const SideNavItems = () => {


/* 
To Avoid hard coding the items on to the side navigation bar, I put them all in a list.
Using JavaScript map() method I was alble to access them all and embed them on to the 
side bar
 */

    const items = [
        {
            type: 'option',
            icon: 'users',
            text: 'Customers',
            link: '/'
        },
        {
            type: 'option',
            icon: 'book', 
            text: 'Loans',
            link: '/loans'
        },
        {
            type: 'option',
            icon: 'sign-in', 
            text: 'Sign In',
            link: '/sign_in'
        },
        {
            type: 'option',
            icon: 'sign-out', 
            text: 'Sign Out',
            link: '/sign_out'
        }

    ]

/* This functions embeds each item from the above array to the DOM */
    const showItems=()=>{
        return items.map((item,i)=>{
            return(
                <div key={i} 
                    className = {item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}/>
                        {item.text}
                    </Link>
            </div>
            )
        })
    }



    /* The user profile picture is embedded here and more information can be added */
    return (
        <div className='side-div'>
       
            <div className='user-holder'></div>
            <p className='user'>Welcome Bill!!!</p>
            {showItems()}
           
        </div>
         
    );
};

export default SideNavItems;