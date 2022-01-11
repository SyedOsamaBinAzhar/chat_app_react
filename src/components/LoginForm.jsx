import React from 'react'
import axios from 'axios';
import { useState } from 'react'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async(e) => {
        e.preventDefault();

        const authObject = {
            "Project-ID" : "ebd0a309-0b45-466a-b8ed-2d6c723b5894",
            "User-Name" : username,
            "User-Secret" : password
        }

        try {
            await axios.get('https://api.chatengine.io/chats', {headers : authObject})

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload();

        } catch (error) {
            setError("OOPS! Something went wrong")
        }
    }

    return (
        <div className = "wrapper">
            <div className='form'>
                <h1 className='title'>CHAT APPLICATION</h1>
                <form onSubmit={handleSubmit}>
                    <input
                    type = "text"
                    value = {username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='input'
                    required
                    placeholder='Username'
                    />
                    <input
                    type = "password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='input'
                    required
                    placeholder='password'
                    />
                    <div align = "center">
                        <button type='submit' className = 'button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
