import React,{useState,useEffect, useCallback} from 'react'
import { useContext } from 'react'
import { ExpenseTrackerContext } from './context'
// import Balance from './balance'
export default function AddTransaction() {
  const [product,setProduct] = useState("")
  const [amount,setAmount] =  useState("")
  const {addAmount,addExpense,income,expense,history,balance} = useContext(ExpenseTrackerContext)

  useEffect(() => {
        localStorage.setItem("balance" , balance)
        localStorage.setItem("income" , income)
        localStorage.setItem("expense" , expense)
        localStorage.setItem("history" , JSON.stringify(history))
    },[income,expense,history,balance])

  const handleTransaction = () => {
    let newText = amount.split(" ").join("")
    let type  = newText.charAt(0)
    let newAmt = newText.substring(1,newText.length)
    if(type === '+') {
        addAmount(newAmt,product)
    }
    if(type === '-') {
      addExpense(newAmt,product)
    }
    console.log(amount,product)

  }

  return (
  <div className='flex flex-col mt-2 w-full ' >
        <h1 className=' font-sans font-bold py-2 border-b-2' >Add Transaction</h1>

        <div className="flex mt-2 flex-col w-full">
            <h4 className='font-sans font-bold text-lg'>Text</h4>
            <input type="text"
                   onChange={(e) => setProduct(e.target.value)}
                    value={product}
                    className='h-12 p-4 mt-3 outline-none'
                    placeholder='Enter here'  />
        </div>
        <div className="flex mt-2 flex-col w-full">
            <h4 className='font-sans font-bold text-lg'>Amount</h4>
            <input type="text"
                   onChange={(e) => setAmount(e.target.value)}
                   value={amount}
                   className='h-12 p-4 mt-3 outline-none'
                   placeholder='Enter here'  />
        </div>

        <button
        onClick={ handleTransaction }
        className='w-full mt-5 font-sans text-white bg-purple-500 p-4 text-xl font-bold'>Add Transaction</button>

    </div>
  )
}
