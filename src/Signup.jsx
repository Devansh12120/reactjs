import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './SignupStyle.css';
const Signup = () => {
    const [state, setState] = useState({
        email:"",
        username: "",
        password: "",
        cpassword: "",
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isValidRegister =(props)=> {
        const errors=[];
        const specialChar = "!@#$%^&*";
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!props.email) {
            errors.email = "required";
        }
        else if (! regex.test(props.email)) {
            errors.email = "Wrong email format";
        }
        if(!props.username){
            errors.username = "required";
        }
        else if(!props.username){
            errors.username = "required";
        }
        if(!props.cpassword){
            errors.cpassword = "required";
        }
        else if(props.cpassword.length <5){
            errors.password = "Pasword should be at least 5 digits";
        }
        if(!props.password){
            errors.password = "required";
        }
        else if(props.password.length <5){
            errors.password = "Pasword should be at least 5 digits";
        }
        else if(!props.password === props.cpassword){
            errors.password = "Password mis-match error";
            errors.cpassword = "Password mis-match error";
        }
        
        return errors;
    
    }
    const [error, setError] = useState({});
    const handleChange =(e)=>{        
        setState({ ...state, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setError(isValidRegister(state));
        isSubmit(true);
        console.log(error.username);
    }
    const [submit, isSubmit] = useState(false);    

    useEffect(()=>{
        if (Object.keys(error).length==0 && submit) {
            console.log(state);
            setIsLoggedIn(true);
        }
    },[error]);
    return (
        isLoggedIn ? <Navigate to={'/app'} />:
        <div className='signinBody'>
            <div className="center" style={{marginTop:'2%'}}>
                <h1>Create an account</h1>
                <form>
                    <div className="txt_field" style={{display:'flex',flexDirection:'row'}}>
                        <input 
                         onChange={handleChange} 
                         autoComplete="off"
                         type="text" 
                         name="username"
                          required />
                            <label>Username</label>
                        <p style={{color:'red',margin:'0',padding:'0'}}>{error.username}</p>
                    </div>
                    <div className="txt_field" style={{display:'flex',flexDirection:'row'}}>
                        <input 
                         onChange={handleChange} 
                         type="text" 
                         name="email"
                         autoComplete="off"
                          required />
                            <label>E-mail</label>
                        <p style={{color:'red',margin:'0',padding:'0'}}>{error.email}</p>
                    </div>
                    <div className="txt_field"  style={{display:'flex',flexDirection:'row'}}>
                            <input 
                             onChange={handleChange} 
                             type="password" 
                         autoComplete="off"
                             id="password" 
                             name="password" 
                             required />
                                <label>Password</label>
                                <p style={{color:'red',margin:'0',padding:'0'}}>{error.password}</p>
                    </div>
                    <div className="txt_field"  style={{display:'flex',flexDirection:'row'}}>
                            <input 
                             onChange={handleChange} 
                             type="password" 
                         autoComplete="off"
                             id="password" 
                             name="cpassword" required />
                                <label>Confirm Password</label>
                                <p style={{color:'red',margin:'0',padding:'0'}}>{error.cpassword}</p>                        
                    </div>
                        <div className="signup_link">Forgot Password?</div>
                    <input type="submit" onClick={handleSubmit} name="loginbtn" value="Create an account" />
                        <div className="signup_link">
                            Already a member? <Link to={"/login"}>Login</Link> 
                        </div>
                </form>
            </div>
        </div>
    )
}
export default Signup;