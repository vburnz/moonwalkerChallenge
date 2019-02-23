import React from 'react'
import Checkbox from './Checkbox'
import Form from './Form'

export default function EmailAddressBox (props) {
    const emailAddressBox = {
        inputs : [
            {
                name: 'emailAddress', 
                placeholder: 'Enter email address'
            }
        ], 
        title1: 'Join the list!',
        title2: 'SIGN UP FOR THE TLC NEWSLETTER'
    }
    return(
  
       
            <Form {...props} input={emailAddressBox} />
            

    )
}

      // <div className="email-container">
        //         <div className="title-holder">
        //         <h1 className="title" >Join the list!</h1>
        //         </div>
        //     <div className="input-container">
        //     <h3 className="title-2">SIGN UP FOR THE TLC NEWSLETTER</h3>
            
        //     <form className="email-form">
        //         <span className="input-box">
        //             <input className="email-input" type="text" value={props.emailAddress} onChange={props.inputHandler} placeholder="Enter email address" name="emailAddress"/>
        //         </span>
        //         <Button onClick={props.clickHandler} text={"NEXT"} />
        //     </form>
           
        //     <Alert alert={props.alert} />
            
           
        //     </div>
            

        // </div>