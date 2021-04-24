import React,{useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext);
  

    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0);
    const onSubmit=e=>{
        e.preventDefault();


        if(text=="" && amount==0){
            toast("Please add expense!");            
            return;
        }

        const newTransaction={
            id:Math.floor(Math.random() * 100000000),
            text,
            amount:+amount
        }

        addTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (add minur sign for expense)</label
                    >
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
            <ToastContainer/>
        </div>
    )
}
