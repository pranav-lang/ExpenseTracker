import React,{useContext} from 'react'
import IncomeExpense from './incomeExpense'
import History from './history'
import AddTransaction from './addTransaction'
import Balance from './balance'
import { ExpenseTrackerProvider } from './context'
export default function App() {

  return (
<ExpenseTrackerProvider>
    <div className='h-screen  flex bg-gray-100 justify-center items-center '>
      <div className=" w-1/5 p-5  flex flex-col">
        <h1 className='text-4xl'>Expense Tracker</h1>
        <Balance />
        <div className="flex  w-full relative justify-center items-center mx-auto ">
        <IncomeExpense />
        </div>
        <History />
        <AddTransaction />
      </div>
    </div>
    </ExpenseTrackerProvider>
  )
}
