import React from 'react'

export default function Alert (props) {
    return (
        props.alert !== '' ? <p className="alert">{props.alert}</p> : null     
    )
}