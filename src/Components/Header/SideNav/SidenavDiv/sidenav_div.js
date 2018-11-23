/* 
    This module designs the side navigation div when the browser width
    is wide (in this case from 800px) hence we do not need the 
    'humburger' icon that hides the div.
*/



import React from 'react';
import SideNavItems from '../sideNav_items';

/* SideNavItems modules contains the items of the side navigation
bar. they are imported here to control how they are displayed.
*/

const SideNavDiv = () => {
    return (
        <div className='side-nav-div'>
            <SideNavItems/>
        </div>
    );
};

export default SideNavDiv;