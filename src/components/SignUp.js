import React, {Component} from 'react'
import EmailAddressBox from './EmailAddressBox'
import NameBox from './Namebox'
import Thanks from './Thanks'

export default class SignUp extends Component { 
    constructor(props){ 
        super(props); 
        this.state = { 
            emailAddress: '', 
            firstName: '', 
            lastName: '', 
            checked: false, 
            stage: this.props.stage || 'ENTER_EMAIL', 
            alert: this.props.alert || ''

        }
        this.inputHandler = this.inputHandler.bind(this); 
        this.checkBoxHandler = this.checkBoxHandler.bind(this); 
        this.emailClickHandler = this.emailClickHandler.bind(this); 
        this.nameClickHandler = this.nameClickHandler.bind(this); 
    }
    inputHandler(evt){ 
        this.setState({[evt.target.name]: evt.target.value})
    }
    checkBoxHandler(evt){ 
        console.log(evt); 
        this.setState({checked: !this.state.checked})
        console.log(this.state.checked); 
    }
    emailClickHandler(){ 
        if (this.state.emailAddress !== '' && this.state.checked && this.validateEmail()) { //&& email validation 
            this.setState({stage: 'ENTER_NAME', alert: ''})
        } else if (!this.state.checked) { 
            this.setState({alert: 'Please agree to the Privacy Policy'})   
        } else { 
            this.setState({alert:'Please enter a valid email address'})
        }
    }
    nameClickHandler(){ 
        if (this.state.firstName !== '' && this.state.lastName !== ''){ 
            this.setState({stage: 'COMPLETE', alert: ''})
            console.log({firstName: this.state.firstName, lastName: this.state.lastName, emailAddress: this.state.emailAddress}); 

        } else { 
            console.log('ppp'); 
            this.setState({alert: 'Please enter a first and last name'})
           
        }
    }
    validateEmail(){ 
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.state.emailAddress).toLowerCase());
    }
    render(){
        return(
            <div>
                {this.state.stage === 'ENTER_EMAIL' ?  <EmailAddressBox {...this.state} inputHandler={this.inputHandler} checkBoxHandler={this.checkBoxHandler} clickHandler={this.emailClickHandler}/> : null }
                {this.state.stage === 'ENTER_NAME' ? <NameBox {...this.state} inputHandler={this.inputHandler} clickHandler={this.nameClickHandler}/> : null }
                {this.state.stage === 'COMPLETE' ? <Thanks /> : null } 
               
               
            </div>
        )
    }
}

