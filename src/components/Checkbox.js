import React from 'react'

export default function Checkbox (props) {
    return(
        <span className="checkbox-container">
            <input type="checkbox" defaultChecked={props.checked} onChange={props.checkBoxHandler}/>
            <p>I agree to receive notification from Discovery Communications in accordance with the following Privacy Policy</p>
        </span>      
    )
}