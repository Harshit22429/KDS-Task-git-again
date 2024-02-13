import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../actions/user";

const Register = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e)=>{
        e.preventDefault()
        dispatch(registerUser(name, email, password));
        
    }
    const register = useSelector(state=>state.register);
    useEffect(()=>{
        //remain to implement
        console.log(register);

        if(register.message){
            window.alert(register.message);
            dispatch({type:"CLEAR_MESSAGE"});
            setName('');
            setEmail('');
            setPassword('');
            navigate('/login');
        }
    },[register])
    return(
        <>
            <h1>Register Your Self</h1>
            <form>
                <lable>Name:</lable>
                <input type="text" value={name} placeholder="Enter your name" onChange={e=>setName(e.target.value)} />
                <br/>
                <lable>Email:</lable>
                <input type="text" value={email} placeholder="Enter your email" onChange={e=>setEmail(e.target.value)} />
                <br/>
                <lable>Password:</lable>
                <input type="text" value={password} placeholder="Enter your password" onChange={e=>setPassword(e.target.value)} />
                <br/>
                <input type="button" value="Register" onClick={handleRegister} />
            </form>
            <Link to="/login">Login </Link>
        </>
    )
}

export default Register;