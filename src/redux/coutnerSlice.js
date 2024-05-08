import { createSlice } from "@reduxjs/toolkit";

const coutnerSlice = createSlice({
    name : 'counterSlice',
    initialState : 0,
    reducers : {
        INCREMENT(state){
            return state + 1
        },
        DECREMENT(state){
            return state - 1
        },
        INCREMENT_BY(state, action){
            return state + action.payload
        },
        DECREMENT_BY(state, action){
            return state - action.payload
        }
    }
})

export const {INCREMENT, INCREMENT_BY, DECREMENT, DECREMENT_BY} = coutnerSlice.actions
export default coutnerSlice.reducer