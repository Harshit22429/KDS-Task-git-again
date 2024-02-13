import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactUser } from "../actions/user";
import { useNavigate } from "react-router-dom";

const Contact = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [ name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
     
    const handleContact = (e)=>{
        e.preventDefault();
        dispatch(contactUser(name, email, phone, message));
        
    }
    
    const contact = useSelector(state=>state.contact);
    
    useEffect(()=>{
        // console.log(contact.message);
        // console.log(contact.error);
        const userLogin = contact?.error?.response?.data?.message;
        if(userLogin){
            console.log(userLogin);
            window.alert(userLogin);
            dispatch({type:"CLEAR_ERROR"});
            navigate('/login');
        }
        else if(contact?.message){
            dispatch({type:"CLEAR_MESSAGE"});
            window.alert("message send successfully")
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        }
        else if(contact?.error){
            window.alert(contact?.error);
            dispatch({type:"CLEAR_ERROR"});
        }
    },[contact])
    return(
        <>
        <h1>Get In Touch</h1>
        <form>
            <label>Your Name :</label>
            <input type="text" placeholder="enter your name" value={name} onChange={e=>setName(e.target.value)}/>
            <br/>
            <label>Your Email :</label>
            <input type="email" placeholder="enter your email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <br/>
            <label>Your Phone :</label>
            <input type="number" placeholder="enter your Phone" value={phone} onChange={e=>setPhone(e.target.value)}/>
            <br/>
            <label>Your message :</label>
            <input type="text" placeholder="enter your message" value={message} onChange={e=>setMessage(e.target.value)}/>
            <br/>
            <input type="button" value="send" onClick={handleContact} />  
        </form>
        </>
    )
}

export default Contact;