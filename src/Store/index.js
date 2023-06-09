import { configureStore, createSlice } from "@reduxjs/toolkit"

const userSclice = createSlice({
    name: "user",
    initialState: {isLoggedIn : false},
    reducers: {
       login(state){
        state.isLoggedIn = true
       },
       logout(state){
        localStorage.removeItem("userId")
          state.isLoggedIn = false
       }
    }
})

const adminSlice = createSlice({
    name:"auth",
     initialState:{isLoggedIn:false},
     reducers:{
        login(state){
        state.isLoggedIn = true
       },
       logout(state){
        localStorage.removeItem("adminId")
        localStorage.removeItem("token")
          state.isLoggedIn = false
       }
     }
})

export const userAction = userSclice.actions;
export const adminAction = adminSlice.actions;

export const store = configureStore({
    reducer:{
        user: userSclice.reducer,
        admin: adminSlice.reducer,
    }
})