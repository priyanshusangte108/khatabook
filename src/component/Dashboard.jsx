import React from 'react'

const Dashboard = ({transactions}) => {
  
  const balance = transactions.reduce
  ((p,c) => p+c.amount, 0);

  const Income = transactions.filter
  ((transaction) => transaction.amount > 0)
  .reduce((p,c) => p+c.amount,0);

  const expense = transactions.filter
  ((transaction) => transaction.amount < 0)
  .reduce((p,c) => p+c.amount,0);
  return (
    <div className="card-section">
     <div className="card-1">
      <h3>Total Income</h3>
      <h1>{Income}</h1>
     </div>
     <div className="card-2">
     <h3>Total Expense</h3>
     <h1>{expense}</h1>
     </div>
     <div className="card-3">
     <h3>Total Balance</h3>
     <h1>{balance}</h1>
     </div>
     </div>
  )
}

export default Dashboard

