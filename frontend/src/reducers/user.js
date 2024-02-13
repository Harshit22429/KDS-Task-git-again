import { createReducer } from "@reduxjs/toolkit";

export const registerReducer = createReducer({}, {
    "REGISTER_REQUEST": (state) => {
        state.loading = true;
        state.isAuthentication = false;
    },
    "REGISTER_SUCCESS": (state, action) => {
        state.loading = false;
        state.isAuthentication = true;
        state.error = null;
        state.message = action.payload;
    },
    "REGISTER_FAILURE": (state, action) => {
        state.loading = false;
        state.isAuthentication = false;
        state.error = action.payload;
    },

    

    "CLEAR_ERROR": (state, action) => {
        state.error = null;
    },
    "CLEAR_MESSAGE": (state, action) => {
        state.message = null;
    }
})

export const loginReducer = createReducer({}, {
    "LOGIN_REQUEST": (state) => {
        state.loading = true;
        state.isAuthentication = false;
    },
    "LOGIN_SUCCESS": (state, action) => {
        state.loading = false;
        state.isAuthentication = true;
        state.error = null;
        state.message = action.payload;
    },
    "LOGIN_FAILURE": (state, action) => {
        state.loading = false;
        state.isAuthentication = false;
        state.error = action.payload;
    },

    

    "CLEAR_ERROR": (state, action) => {
        state.error = null;
    },
    "CLEAR_MESSAGE": (state, action) => {
        state.message = null;
    }
})


export const contactReducer = createReducer( {}, {
    "CONTACT_USER_REQUEST": (state, action) => {
        state.loading = true;
    },
    "CONTACT_USER_SUCCESS": (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    "CONTACT_USER_FAILURE": (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    
    CLEAR_ERROR: (state) => {
        state.error = null;
    },
    CLEAR_MESSAGE: (state) => {
        state.message = null;
    }
})