import React from "react";

export default function AppReducer(state,action){
    switch(action.type){
        case 'DELETE_TRANSACTION':{
            return {
                ...state, transactions:state.transactions.filter(item =>item.id != action.id)
            };
        }
        case 'ADD_TRANSACTION':{
            if(action.transaction.amount)
            return {
                ...state,transactions:[action.transaction,...state.transactions]
            };
            else
            return {...state};
        }
        default :{
            throw new Error("Unknown action was dispatched!");
        }

    }
}