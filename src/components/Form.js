import React from 'react'
import Button from './Button'
import Alert from './Alert'
import Checkbox from './Checkbox'

export default function Form (props) {
    return(
        <div className="email-container">
        <div className="title-holder">
            <h1 className="title">{props.input.title1}</h1>
        </div>
        <div className="name-container">
            <h3 className="title-2">{props.input.title2}</h3>
            <div className="form-div">
            <form className="email-form">
                {props.input.inputs.map(input => (
                    <span className="input-box">
                        <input className="email-input" type="text" value={props[input.name]} onChange={props.inputHandler} placeholder={input.placeholder} name={input.name}/>
                    </span>
                ))}
                <Button clickHandler={props.clickHandler} text={props.input.buttonText} />
                
            </form>
                {/* <Checkbox checked={props.checked} checkBoxHandler={props.checkBoxHandler} />  */}
                <Alert alert={props.alert} />
            </div>
                
            </div> 
        </div>
    )
}