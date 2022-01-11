import React from 'react'

import { ChatEngine } from 'react-chat-engine'

import "./App.css"

import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const App = () => {
    if(!localStorage.getItem('username')){ 
        return <LoginForm/>
    }

    return (
        <div>
            {console.log(localStorage.getItem('username'))}
            <ChatEngine
            height = "100vh"
            projectID = "ebd0a309-0b45-466a-b8ed-2d6c723b5894"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')} //password
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
        </div>
        
    )
}

export default App
