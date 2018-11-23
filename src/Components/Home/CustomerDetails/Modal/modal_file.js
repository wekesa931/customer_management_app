/* This module does several tasks. these are:
        1. creates the module leading to customer input form
        2. displays the aded customer tab on the browser

        NOTE: form authentication results in redirection of the page
            hece I disabled it in this case.
*/

import React, { Component } from 'react';

/* 
    I used react-bootstrap to create the  modal and the form
*/
import { Modal, FormControl, Button, HelpBlock, FormGroup, ControlLabel } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './modal_file.css';
import CustomerSort from '../customerSort/customerSort';

export default class ModalTab extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    /* 
        The state specifies when the modal and the form should be opened/closed.
        It also gets the value from form input and embeds them to the 'add new customer'
        tab.
        THe Beauty of this is that it creates a reusable code, rather than static hard coding. 
    */
        this.state = {
            show: false,
            showMe:false,
            myName:'',
            lastname:'',
            email:'',
            phone:'',
            branch:'',
            loan:'',
            photo:''
        };
      }
    
      /* This function handles modal close */
      handleClose() {
        this.setState({ show: false });
        this.showDiv()
      }
       /* This function handles modal opening */
      handleShow() { this.setState({ show: true });}

       /* This function handles add new customer tab */
      showDiv() { this.setState({ showMe:!this.state.showMe ? true:false });}



        /* 
            THese functions are event handlers that isten to the form input and 
            hence updates the state earlier defined
         */
        nameHandler=(event)=> { this.setState({ myName:event.target.value }) }
        lastnameHandler=(event)=> { this.setState({ lastname:event.target.value })}
        emailHandler=(event)=> { this.setState({ email:event.target.value }) }
        phoneHandler=(event)=>{ this.setState({ phone:event.target.value })}
        branchHandler=(event)=>{ this.setState({ branch:event.target.value })}
        loanHandler=(event)=>{ this.setState({ loan:event.target.value }) }
        photoHandler=(event)=>{ this.setState({  photo:event.target.value }) }
      
        nosubmit=(event)=>event.preventDefault
        closer=()=>this.handleClose()

        finishForm =()=>{
            this.nosubmit.bind(this)
            this.closer()
        }
        


    /* THis is bootstrap form initialization */

    FieldGroup=({ id, label, help, ...props })=> {
        return (
          <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
          </FormGroup>
        );}

    /*  the form is then created here */ 
      
      formInstance = (
        <form>
            <this.FieldGroup id="formControlsText" type="text" label="First Name" placeholder="Enter text"
                required
                onChange = {this.nameHandler}
                />
      
            <this.FieldGroup id="formControlsText" type="text" label="Second Name" placeholder="Enter text"
                required
                onChange = {this.lastnameHandler}
                />
     
            <this.FieldGroup id="formControlsEmail" type="email" label="Email Address" placeholder="Enter email"
                required
                onChange = {this.emailHandler}
                />
           <this.FieldGroup id="formControlsPhoneNumber" type="tel" label="Phone Number" pattern="^\d{4}\d{3}\d{3}$" placeholder="0712345678"
            required
            onChange = {this.phoneHandler}
                />
               
            <FormGroup controlId="formControlsSelect"> <ControlLabel>Branch</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                    <option value="branch1">Branch 1</option>
                    <option value="branch2">Branch 2</option>
                    <option value="branch3">Branch 3</option>
                </FormControl>
            </FormGroup>

            <this.FieldGroup id="formControlsLoanLimit" type="number" label="Loan Limit" placeholder="Enter text" min="10" max="50000"
                required
                onChange = {this.loanHandler}
                />
          
            <this.FieldGroup id="formControlsFile" type="file" label="Upload Photo"
                required
                onChange = {this.photoHandler}
                />
            <hr/>
          <Button type="submit"
            onClick={this.finishForm}
                >Add Customer            
            </Button>
        </form>
      );
      
    /* Here the form items and the modal are rendered 
        the add customer tab is also rendered here
    */ 

render() {
       
    return (
        <div
            style={{ height: '100vh'}}
        >
           
            <CustomerSort 
                handleShow={this.handleShow}
                />
  
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton><Modal.Title>Enter Customer Details</Modal.Title>
                        </Modal.Header>
                <Modal.Body>
                    {this.formInstance}
                        </Modal.Body>
          </Modal>


            <div>
                
                <CSSTransition in={this.state.showMe} timeout={2000} classNames="square" >
                    <div className={`square ${this.state.showMe}`}>
                        
                        <p>Name:{this.state.myName}{this.state.lastname}</p>
                        <p>Email:{this.state.email}</p>
                        <p>Phone Number:{this.state.phone}</p>
                        <p>Branch:{this.state.branch}</p>
                        <p>Loan limit:{this.state.loan}</p>
                        <p>Name:{this.state.photo}</p>
                       
                        <div className='buttonn'>
                            <Button type="button"
                                onClick={this.showDiv.bind(this)}
                                >Remove Customer</Button>
                        </div>
                        
                    </div>
                    
                </CSSTransition>

            </div>

        </div>
      
    )
  }
}
