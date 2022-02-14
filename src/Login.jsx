import './Login.css';
import React from 'react';
import {  Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
      });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState({});
    const [submit, isSubmit] = useState(false);        
    const handleChange =(e)=>{        
        setState({ ...state, [e.target.name]: e.target.value });
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        setError(isValidUser(state));
        isSubmit(true);
    }

    useEffect(()=>{
        if (Object.keys(error).length==0 && submit) {
            console.log(state);
            setIsLoggedIn(true);
        }
    },[error]);
    const isValidUser = (props)=>{
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!props.email) {
            errors.email = "E-mail is required";
        }
        else if (! regex.test(props.email)) {
            errors.email = "Wrong email format";
        }
        
        if(!props.password){
            errors.password = "Password is required";
        }
        else if(props.password.length <5){
            errors.password = "Pasword should be at least 5 digits";
        }
        return errors;
    }
    return (
       isLoggedIn ? <Navigate to={'/app'} />:
       <div className='loginBody'>
            <div className="center">
                <h1>Login</h1>
                <form >
                    <div className="txt_field">
                        <input 
                         type={"text"} 
                         name={"email"} 
                         onChange={handleChange}
                         value={setState.email}
                         required />
                            <span></span>
                            <label>Username</label>
                    </div>
                    <p style={{color:"red",paddingTop:'0px',marginTop:'0px'}}>{error.email}</p>
                    <div className="txt_field row">
                        <div className="col-md-10">
                            <input 
                             type={"password"} 
                             id={"password"} 
                             name={"password"} 
                             required 
                             onChange={handleChange}
                             value={setState.password}                                 
                             />
                                <span></span>
                                <label>Password</label>
                        </div>
                        <div className="col-md-2">
                            <i className="bi bi-eye-slash"></i>
                        </div>
                    </div>
                    <p style={{color:"red",paddingTop:'0px',marginTop:'0px'}}>{error.password}</p>
                        <div className="signup_link">Forgot Password?</div>
                    <input type="submit" name="loginbtn" value="Login" onClick={handleOnSubmit} />
                        <div className="signup_link">
                            Not a member? 
                                    <Link to={"/Signup"}>     Signup</Link> 
                        </div>
                </form>
            </div>
        </div> 
    )
}
export default Login;