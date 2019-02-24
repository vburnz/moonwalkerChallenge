import React from 'react'
import Button from './Button'


export default function Form (props) {
    return(
        <form className="form">
            {props.input.inputs.map(input => (
                <span className="input-box">
                    <input 
                        className="user-input" 
                        type="text" 
                        value={props[input.name]} 
                        onChange={props.inputHandler} 
                        placeholder={input.placeholder}
                        name={input.name}
                    />
                </span>
            ))}
            <Button 
                clickHandler={props.clickHandler} 
                text={props.input.buttonText} 
            />
        </form>
    )
}