import React, { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Form from './component/Form'
import Dashboard from './component/Dashboard'
import ListGroup from './component/ListGroup'

const App = () => {
  const [transactions,setTransactions] = useState([
    {
      id : 1,
      text : "Salary",
      amount : 100000 
    },
    {
      id : 2,
      text : "Rent",
      amount : -25000 
    },
    {
      id : 3,
      text : "Grocery",
      amount : -10000
    },
    {
      id : 4,
      text : "Freelancing",
      amount : 20000 
    },
  ])

  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false,
  });
  //delete
  const removeTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };
 // add
 const addTransaction = (text, amount) => {
  const newTransaction = {
    id: crypto.randomUUID(),
    text: text,
    amount: parseInt(amount),
  };

  setTransactions([newTransaction, ...transactions]);
};
//edit
const editTransaction = (transaction) => {
  setEdit({
    transaction: transaction,
    isEdit: true,
  });
};
// update
const updateTransaction = (updatedTransaction) => {
  setTransactions(
    transactions.map((transaction) =>
      transaction.id === updatedTransaction.id
        ? updatedTransaction
        : transaction
    )
  );

  setEdit({
    transaction: {},
    isEdit: false,
  });
};

  return (
    <>
     <Navbar /> 
     <Form addTransaction={addTransaction}  edit={edit} updateTransaction={updateTransaction}/>
    <Dashboard  transactions={transactions}/>
     <ListGroup transactions={transactions} removeTransaction ={removeTransaction} editTransaction={editTransaction}/>
    </>
    
  )
}

export default App
