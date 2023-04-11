import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "default",
    connected: false,
    allEmail: ['admin@gmail.com'],
    accounts: [{id:0, username:'admin', password:'123', email:'admin@gmail.com', fav:[]}],
    lastId: 0,
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
                        fav:state.accounts[index].fav,}
                        state.connected = true;
                        valide = true
                }
            }

        },
        loginAsGuest: (state)=>{
            state.connectedAccount = {guest:true, username: 'guest', fav: []}
            state.connected = true;
        },
        logout: (state)=>{
            state.connected = false;
            state.connectedAccount = null;
        },

        prout: ()=>{
            console.log('prout');
        },
        signin: (state, action)=>{
            let notUsed = true;
            state.accounts.forEach(account => {
                if (account.email == action.payload.email) {
                    notUsed = false
                }
            });
            if (notUsed) {
                state.accounts = [...state.accounts,{id:state.lastId+1,
                                                    username:action.payload.username,
                                                    password: action.payload.password,
                                                    email: action.payload.email,
                                                    fav: []}]
                state.lastId = state.lastId+1
                state.allEmail.push(action.payload.email)
            }
        },
        addFav: (state, action)=>{
            console.log('addFav:Start');
            for (let index = 0; index < state.accounts.length; index++) {
                if (state.accounts[index].email == state.connectedAccount.email) {
                    state.accounts[index].fav.push(action.payload);
                    state.connectedAccount.fav.push(action.payload);
                }
            }
        }, 
        removeFav: (state, action)=>{
            for (let index = 0; index < state.accounts.length; index++) {
                if (state.accounts[index].email == state.connectedAccount.email) {
                    const newVal = state.accounts[index].fav.filter(book=>book.id!=action.payload)
                    state.accounts[index].fav = newVal
                    state.connectedAccount.fav = newVal
                }
                
            }
        }
        


    }
});

export const { login , logout, loginAsGuest, prout, signin, addFav, removeFav } = accountSlice.actions
export default accountSlice.reducer