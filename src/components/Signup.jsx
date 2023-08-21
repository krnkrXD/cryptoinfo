import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { Auth } from '../firebase/firebaseapp';
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(Auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/signin")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
    return (
        <form style={{ width: "100%", height: "500px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", columnGap: "20px", rowGap: "10px" }}>                                              
            <Form.Item
                id="email-address"
                name={['user', 'email']}
                label="Email"
                rules={[
                    {
                    type: 'email',
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "30%"}}
                >
                <Input />
            </Form.Item>
            <Form.Item
                id = "password"
                label="Password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "30%"}}
            >
                <Input.Password />
            </Form.Item>        
            <Button onClick={onSubmit}>      
                Sign Up                                                                 
            </Button>
            <div>
                Already have an account?{' '}
                <NavLink to="/signin" >
                    Sign in
                </NavLink>
            </div>
        </form>
  )
}
 
export default Signup