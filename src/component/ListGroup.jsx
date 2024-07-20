import React from 'react'
import ListItem from './ListItem'
const ListGroup = ({transactions, removeTransaction,editTransaction}) => {

   if(transactions.length === 0){
    return (
      <h3> No Transactions yet</h3>
    )
   }

  return (
    <>
    <h3 className="footer-heading">All Transaction :</h3>
      
      <ul className="footer-card"> 
      {
        transactions.map(transaction => 
        <ListItem key={transaction.id}
         transaction={transaction}
          removeTransaction={removeTransaction}
            editTransaction={editTransaction}/>)
      }
     </ul>
    </>
      
     
  )
}

export default ListGroup
