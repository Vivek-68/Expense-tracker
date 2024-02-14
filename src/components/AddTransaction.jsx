import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
  const [formdata, setFormData] = useState({
    'text':'',
    'amount':''
  })
  const handleChange = (e) =>{
   setFormData(prev => ({...prev,[e.target.name] : e.target.value}));
  }
  const {dispatch} = useContext(GlobalContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const transaction = {
      id:Date.now().toString(),
      text:formdata.text,
      amount:+formdata.amount
    };
    dispatch({
            type:'ADD_TRANSACTION',
            transaction:transaction
    });

    setFormData({text:'',amount:''});
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
        <button className='add-btn' type='submit' onClick={handleSubmit}>Add transaction</button>
    
    </div>
  )
}

export default AddTransaction