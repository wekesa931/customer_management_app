/* 
This is the main area on the dash board.
It renders the 'Add Cusomer' button and the select type button
*/

import React from 'react';
import './customerSort.css';


const CustomerSort = (props) => {

/* select button */
const sortCustomer=()=>{
    return(
        <div className='customer-type'>
           
            <select className='type'>
                <option>Type</option>
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
            </select>
        </div>
    )
}

/* Add Cusomer */
const addCustomer = ()=>{
    return(
        <div className='button'>
            <button type="button"
            onClick={props.handleShow}
            >Add Customer</button>
        </div>
        
    )
}


    return (
        <div className='customer-sort'>
            {sortCustomer()}
            {addCustomer()}
            
            
        </div>
    );
};

export default CustomerSort;