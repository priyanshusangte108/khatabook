import React from 'react'

const ListItem = ({transaction, removeTransaction,editTransaction}) => {
  return (
    <div className="li">
       <li className={transaction.amount < 0 ? "text-danger" : "text-success"}>
       <h4>{transaction.text}</h4>
       <h3>{transaction.amount}</h3>
       
        <span>
          <button className="btn-1"  onClick={() => editTransaction(transaction)}>Edit</button>
          <button className="btn-2" onClick={() => removeTransaction(transaction.id)}>Delete</button>
        </span>
      </li>
    </div>
    
  )
}

export default ListItem ;
