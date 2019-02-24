import React from 'react'
import Alert from './Alert'
import Checkbox from './Checkbox'
import Title from './Title'
import Form from './Form'

export default function InputBox (props) {
    const { input, checked, checkBoxHandler, alert } = props; 
    return(
        <div className="sign-up-container">
            <Title title={input.title1} />
            <div className="input-container">
                <h3 className="subheader">{input.title2}</h3>
                <div className="form-div">
                   <Form {...props}/>
                    {props.checkBoxHandler ? 
                        <Checkbox checked={checked} checkBoxHandler={checkBoxHandler} /> 
                        : null 
                    }
                    <Alert alert={alert} />
                </div>        
            </div> 
        </div>
    )
}