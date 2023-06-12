import { createContext, useContext,useState,useEffect } from "react";

const ExpenseTrackerContext = createContext();

const ExpenseTrackerProvider = ({children}) => {

    const [balance , setBalance] = useState(localStorage.getItem("balance") ? parseInt(localStorage.getItem("balance")) : 0 )
    const [expense , setExpense] = useState(localStorage.getItem("expense") ? parseInt(localStorage.getItem("expense")) : 0)
    const [income , setIncome] = useState(localStorage.getItem("income") ? parseInt(localStorage.getItem("income")) : 0)
    const [history,setHistory]  = useState(localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")) : [])


    const addAmount  = (amount,product) => {
        setBalance(balance+parseInt(amount))
        setIncome(income+parseInt(amount))
        setHistory((prevHistory) => [...prevHistory , {amount : amount,product : product,type : '+'} ])
        console.log(balance,income,history)

    }
    const addExpense =  (amount,product) => {
        setBalance( balance-parseInt(amount))
        setExpense( expense+parseInt(amount))
        setHistory((prevHistory) => [...prevHistory , {amount : amount,product : product,type : '-'} ])
    }

     return (
    <ExpenseTrackerContext.Provider value={{ expense,history,balance,income,addAmount,addExpense}}>
      {children}
    </ExpenseTrackerContext.Provider>
  );

}

export  { ExpenseTrackerContext, ExpenseTrackerProvider };

// Inside your component or custom hook
