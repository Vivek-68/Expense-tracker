import React from 'react'
import { useState } from 'react'

const AddTransaction = () => {
  const [formdata, setFormData] = useState({
    'text':'',
    'amount':''
  })
  const handleChange = (e) =>{
   setFormData(prev => ({...prev,[e.target.name] : e.target.value}));
  }
  return (
    <div className='addtransaction-container'>
        <p>Add new transaction</p>
        <hr />
        <div className="text-input">
        <p>Text</p>
        <input type="text" name='text' onChange={handleChange} value={formdata.text}/>
        </div>
        <div className="amount-input">
            <p>Amount</p>
            <p>(negative-expense,positive-income)</p>
            <input type="text" name='amount' onChange={handleChange} value={formdata.amount}/>
        </div>
        <button className='add-btn' type='submit'>Add transaction</button>
    
    </div>
  )
}

export default AddTransaction