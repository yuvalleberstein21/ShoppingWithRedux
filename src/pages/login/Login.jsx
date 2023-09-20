import React from 'react'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
            <input style={{ padding: '30px', marginBottom: "20px" }} type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
            <input style={{ padding: '30px', marginBottom: "20px" }} type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <button style={{ padding: "10px", width: "100px" }} onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login