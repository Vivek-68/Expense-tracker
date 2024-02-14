import React,{createContext,useReducer} from 'react';
import { useContext } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions:[
        {id:1,text:'Flower',amount:-20},
        {id:2,text:'Salary',amount:500},
        {id:3,text:'Book', amount:-50},
        {id:4,text:'Hustle',amount:100}
    ]
}
export const GlobalContext = createContext(initialState);



export const GlobalProvider = ({children}) =>{
const [state,dispatch] = useReducer(AppReducer,initialState);
const deleteTransaction = (id) =>{
dispatch({
    type:'DELETE_TRANSACTION',
    id
});
}

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            dispatch
        }}>
            {children}
        </GlobalContext.Provider>
    );
}


