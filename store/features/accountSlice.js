import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "default",
    connected: false,
    accounts: [{id:0, username:'admin', password:'123', email:'admin@gmail.com', chats:[{name:'chat1'},{name:'chat2'}], premium:true, chatsPremium:[]}],
    connectedAccount: {},
};

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers:{
        login: (state, action)=>{
            let valide = false;
            state.connectedAccount = null;
            for (let index = 0; index < state.accounts.length; index++) {
                if ((state.accounts[index].username == action.payload.userInfo || state.accounts[index].email == action.payload.userInfo)
                    && state.accounts[index].password == action.payload.password) {
                    state.connectedAccount = {
                        username: state.accounts[index].username,
                        email:state.accounts[index].email,
                        chats:state.accounts[index].chats,
                        premium:state.accounts[index].premium,
                        chatsPremium: state.accounts[index].chatsPremium}
                        state.connected = true;
                        valide = true
                }
            }

        },
        loginAsGuest: (state)=>{
            state.connectedAccount = {guest:true, username: 'guest', premium: false, chats: []}
            state.connected = true;
        },
        logout: (state)=>{
            state.connected = false;
            state.connectedAccount = null;
        },

        prout: ()=>{
            console.log('prout');
        }


    }
});

export const { login , logout, loginAsGuest, prout } = accountSlice.actions
export default accountSlice.reducer