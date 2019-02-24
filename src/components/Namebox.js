import React from 'react'
import Form from './Form'

export default function NameBox (props) {
    const nameBox = {
        inputs : [
            {
                name: 'firstName', 
                placeholder: 'First Name'
            }, 
            {
                name: 'lastName', 
                placeholder: 'Last Name'
            }
        ], 
        title1: 'Join the list!',
        title2: 'Almost Done! Please Enter your first and last name!', 
        buttonText: 'SIGN UP'
    }
    return(
        <Form {...props} input={nameBox} />
    )
}

/* <div>
                <h1 className="title">Join the list!</h1>
            </div>
            <div className="name-container">
            <h3 className="title-2">Almost Done! Please Enter your first and last name!</h3>
            <form className="email-form">
                <span className="input-box">
                    {/* for component re-use should make inputs an array of obj and map over it -- have some name to set the className and name, have placeholder in obj *
                    <input className="email-input" type="text" value={props.firstName} onChange={props.inputHandler} placeholder="First Name" name="firstName"/>
                    </span>
                    <span className="input-box">
                    <input className="email-input" type="text" value={props.lastName} onChange={props.inputHandler} placeholder="Last Name" name="lastName"/>
                </span>
                <Button clickHandler={props.clickHandler} text={'SIGN UP'} />
            </form>
                <Alert alert={props.alert} />
            
            </div> */