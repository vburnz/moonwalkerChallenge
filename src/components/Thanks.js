import React from 'react'
import Title from './Title'

export default function Thanks () {
    return(
        <div className="holder">
            <Title title={'Congratulations!'} />
            <div>
                <h3 className="subheader">Thank You For Signing Up!</h3>
                <h5 className="lookout">Look out for the latest news on your favorite shows.</h5>
            </div>

        </div>
    )
}