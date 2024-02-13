import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { loginUser } from "../actions/user";

const Login = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const handleLogin = (e)=>{
        e.preventDefault();
        // use dispatch here
        console.log("handle login", email, password);
        dispatch(loginUser(email,password));
    }

    const login = useSelector(state=>state.login);
    useEffect(()=>{
        console.log("from login under useEffect " ,login);
        if(login.error){
            window.alert(login.error);
            dispatch({type:"CLEAR_ERROR"});
        }
        if(login?.message?.message){
            window.alert(login?.message?.message);
            dispatch({type:"CLEAR_MESSAGE"});
            navigate('./contact');
        }
    },[login])
    return(
        <>  
            
            <h1>Login Your self</h1>
            <form>
                <lable>Email :</lable>
                <input type="email" placeholder="enter your mail" value={email} onChange={e => setEmail(e.target.value)} />
                <br/>
                <lable>Password :</lable>
                <input type="password" placeholder="enter your password" value={password} onChange={e => setPassword(e.target.value)} />
                <br/>
                <input type="button" value="Login" onClick={handleLogin}/>
            </form>
            <Link to="/register">first register yourself</Link>
        </>
    )
}

export default Login;