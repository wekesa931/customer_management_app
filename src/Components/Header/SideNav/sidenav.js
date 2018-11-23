/* This module specifies connects the 'hamburer icon' to the module 
where the ogic for opening and closing is done */

import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNav_items';


const SideNavigation = (props) => {
    return (
        <div>
            <SideNav
                showNav = {props.showNav}
                onHideNav = {props.onHideNav}
                navStyle = {{
                    maxWidth: '57vw',
                    background: 'rgb(250, 250, 250)'
                }}
            >
            
                <SideNavItems/>
            </SideNav>
            
        </div>
    );
};

export default SideNavigation;