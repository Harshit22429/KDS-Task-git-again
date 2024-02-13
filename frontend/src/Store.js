import {configureStore} from "@reduxjs/toolkit";
import { contactReducer, loginReducer, registerReducer } from "./reducers/user";

const store = configureStore({
    reducer:{
        register:registerReducer,
        login:loginReducer,
        
        contact:contactReducer
    }
})

export default store; 