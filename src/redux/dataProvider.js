import { createSlice } from "@reduxjs/toolkit";

const dataProvider = createSlice({
    name : 'dataProvider',
    initialState : [],
    reducers : {
        ADD_TODO(state, action){
            state.push(action.payload)
        },
        UPDATE_TODO(state, action){
            state.forEach(ele => {
                if(ele.id == action.payload) ele.status = !ele.status
            })
        },
        DELETE_TODO(state, aciton){
            return state.filter(ele => ele.id != action.payload)
        }
    }
})

export const {ADD_TODO, UPDATE_TODO, DELETE_TODO} = dataProvider.actions
export default dataProvider.reducer