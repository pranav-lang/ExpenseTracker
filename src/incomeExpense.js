import React,{useContext} from 'react'
import { ExpenseTrackerContext } from './context'
export default function IncomeExpense() {
    const {income , expense} = useContext(ExpenseTrackerContext)
//   console.log("This is from App.js : " , expense )
  return (
    <div className='grid grid-cols-2 w-full mt-5 bg-green-400'>
        <div className="flex flex-col justify-center items-center bg-white border-r-2">
            <p className='font-sans text-black'>Income</p>
            <p className='font-bold font-sans text-3xl text-green-500' >$ {income}</p>
        </div>
        <div className="flex flex-col bg-white justify-center items-center ">
            <p className='font-sans text-black'>Expense</p>
            <p className='font-bold text-3xl font-sans text-red-500' >$ {expense}</p>
        </div>
    </div>
  )
}
