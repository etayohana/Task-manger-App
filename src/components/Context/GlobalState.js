import React, {createContext, useEffect, useReducer, useState} from "react";
import AppReducer from "./AppReducer";
import * as axios from "axios";

// Initial state
const initialState = {
    transactions: []
};

// console.log(initialState.transactions)


// Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [array, setArray] = useState([]);
    useEffect(async () => {
        const result = await axios.get(
            "http://localhost:3001/expense/",
        );
        setArray(result.data);
    }, []);


    initialState.transactions = array;


    const deleteTransaction = async (id) => {
        const result = await axios.delete(
            `http://localhost:3001/expense/${id}`,
        );
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    const addTransaction = async (transaction) => {
        const result = await axios.post(
            "http://localhost:3001/expense/",{transaction }
        );
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    const editTransaction = async (id) => {
        const result = await axios.patch(
            `http://localhost:3001/expense/${id}`,
        );
    };
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        // transactions:  array,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}