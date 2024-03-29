
import {createStore}  from 'redux';
import { createSlice,configureStore } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router';
import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

   

  const initialState={counter:0,showCounter:true,isAuthencated:false}

 

  const counterSlice=createSlice({
    
    name:'counter',
    initialState,
    reducers:{
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter-- 
        },
        increaseCounter(state,action) {
            state.counter=state.counter+action.payload
        },
        toggleCounter(state) {
           state.showCounter=!state.showCounter 
        } ,
        AuthenticationHandler(state){
          state.isAuthencated=!state.isAuthencated
        }  
      }
  })

  

  const store=configureStore({
    reducer:{counter:counterSlice.reducer,
      ui:uiSlice.reducer,
      cart:cartSlice.reducer
    }
  });

  export const {increment,decrement,increaseCounter,toggleCounter,AuthenticationHandler}=counterSlice.actions 

  export default store;
