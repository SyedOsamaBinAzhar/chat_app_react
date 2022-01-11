import React from 'react'
import LoginForm from './LoginForm';

const MyMessage = ({message}) => {
    console.log("message",message);

    if(message?.attachments?.length > 0) {
        return (
            <img
                src = {message.attachments[0].file}
                alt = "message-attachment"
                className = 'message-image'
                style = {{ float : "right" }}
            />
        )
    }
    return (
        <div style = {{float : "right", marginRight : "18px", backgroundColor : "#3B2A50", borderRadius : "3px"}}>
            {message.text.replace( /(<([^>]+)>)/ig, '')}
        </div>
    )
}

export default MyMessage
