import React, { useEffect, useState } from "react";

const Form = ({addTransaction,edit,updateTransaction}) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    edit.isEdit
      ? updateTransaction({ id: edit.transaction.id, text, amount: +amount })
      : addTransaction(text, amount);

    setText("");
    setAmount("");
  };

  useEffect(() => {
    setText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  }, [edit]);
  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <input type="type"
         placeholder="Enter Transaction" required 
          value={text}
         onChange={(e) => setText(e.target.value)}/> <br/>
          <input type="number"
         placeholder="Enter Amount"  required
         value={amount}
         onChange={(e) => setAmount(e.target.value)}/><br/>
         <button>Save Transaction</button>
      </form>
     </div>  
  )
}

export default Form
