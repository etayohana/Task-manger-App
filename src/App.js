import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import IncomeExpenses from "./components/IncomeExpenses/IncomeExpenses";
import TransactionList from "./components/TransactionList/TransactionList";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import {GlobalProvider} from "./components/Context/GlobalState";

function App() {


    return (
        <GlobalProvider>
            <Header/>
            <div className="container">
                <Balance/>
                <IncomeExpenses/>
                <TransactionList/>
                <AddTransaction/>
            </div>
        </GlobalProvider>
    );
}

export default App;
