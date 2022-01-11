import React from 'react'

import { ChatEngine } from 'react-chat-engine'

import "./App.css"

import ChatFeed from './components/ChatFeed'

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID = "ebd0a309-0b45-466a-b8ed-2d6c723b5894"
            userName = "adam"
            userSecret = "123" //password
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App
