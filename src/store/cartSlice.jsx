import {createSlice} from "@reduxjs/toolkit";

const initialState=[];

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state, action) {
      const existItem = state.findIndex(item => item.id === action.payload.id);
      if (existItem !== -1) {
       state[existItem].quantity += 1; 
     } else {
       state.push({ ...action.payload, quantity: 1 });
      }
    },
        remove(state,action){
            return state.filter((item)=> item.id!== action.payload)
        },
        increment(state,action){
            const itemIndex = state .findIndex(item => item.id===action.payload)
            if(itemIndex!==-1){
            state[itemIndex].quantity +=1;
        }
    },
    decrement(state,action){
        const itemIndex = state .findIndex(item => item.id===action.payload)
        if(itemIndex!==-1 && state[itemIndex].quantity>1){
        state[itemIndex].quantity -=1;
    }
},

    },
});

export const {add,remove,increment,decrement}=cartSlice.actions;
export default cartSlice.reducer;
