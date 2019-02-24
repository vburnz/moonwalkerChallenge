import React from 'react'

export default function Title (props) { 
    return (
        <div className="title-holder">
            <h1 className="title">{props.title}</h1>
        </div>
    )
}

