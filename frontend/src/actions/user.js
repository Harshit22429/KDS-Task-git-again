import axios from "axios";

export const registerUser = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "REGISTER_REQUEST",
        })
        const { data } = await axios.post("http://localhost:4000/api/v1/userRegister", {name, email, password }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        console.log(data);
        dispatch({
            type: "REGISTER_SUCCESS",
            payload: data.message,
        })
    } catch (error) {
        // console.log(error.response);
        // console.log(error.message);
        dispatch({
            type: "REGISTER_FAILURE",
            payload: error.message,
        })
    }
}

export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "LOGIN_REQUEST",
        })
        const { data } = await axios.post("http://localhost:4000/api/v1/userLogin", { email, password }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        console.log(data);
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data,
        })
    } catch (error) {
        // console.log(error.response);
        // console.log(error.message);
        dispatch({
            type: "LOGIN_FAILURE",
            payload: error.message,
        })
    }
}


export const contactUser = (name, email, contact, message)=>async(dispatch)=>{
    try {
        dispatch({
            type:"CONTACT_USER_REQUEST"
        })
        const {data} = await axios.post("http://localhost:4000/api/v1/contact",{name, email, contact, message}, {
            headers:{
                "Content-Type":"application/json",
            } ,
            withCredentials: true,           
        })
        console.log(data);
        dispatch({
            type:"CONTACT_USER_SUCCESS",
            payload:data.message
        })
    } catch (error) {
        console.log("error from contact : ", error);
        dispatch({
            type:"CONTACT_USER_FAILURE",
            payload:error
        })
    }
}