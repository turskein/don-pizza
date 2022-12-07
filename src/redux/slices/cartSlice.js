import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    show: 0
}

export const cartSlice = createSlice({
    name: 'stateShow',
    initialState,
    reducers: {
        switchShow: (state) => {
            if(state.show === 0){
                state.show = 1;
            }else if(state.show === 1){
                state.show = 0;
            }
        },
    },
})
/* 
const { actions, reducer } = cartSlice; */

export const { switchShow } = cartSlice.actions;

export default cartSlice.reducer;