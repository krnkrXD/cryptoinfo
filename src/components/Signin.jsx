import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword   } from 'firebase/auth';
import { Auth } from '../firebase/firebaseapp';
import { NavLink, useNavigate } from 'react-router-dom'
 
const Signin = ({isSignin, setSignin}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(Auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setSignin(true);
            toast.success('Sign In Successful!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>         
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
                <div>
                    <Button onClick={onLogin}>      
                        Login                                                                  
                    </Button>
                </div>  
                <div>No account yet? {' '}
                    <NavLink to="/signup">
                        Sign up
                    </NavLink>
                </div>
            </form>
        </>
    )
}
 
export default Signin;