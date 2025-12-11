import { createContext, useContext } from "react"
import { v4 as uuidV4 } from "uuid"
import useLocalStorage from "../UseLocalStorage"

const BudgetContext = createContext()

export function useBudget() {
  return useContext(BudgetContext)
}

export default function BudgetCalculation({ children }) {
  const [budgets, setBudgets] = useLocalStorage({ key: "budgets", defaultValue: [] })
  const [expenses, setExpenses] = useLocalStorage({ key: "expenses", defaultValue: [] })

  function getExpenses(budgetId) {
    return expenses.filter(expense => expense.budgetId === budgetId)
  }

  function addExpenses({ description, amount, budgetId }) {
    setExpenses(prev => [
      ...prev,
      { id: uuidV4(), description, amount, budgetId }
    ])
  }

  function addBudgets({ name, max }) {
    setBudgets(prev => {
      if (prev.find(budget => budget.name === name)) {
        return prev
      }
      return [...prev, { id: uuidV4(), name, max }]
    })
  }

  function deleteBudgets({ id }) {
    setBudgets(prev => prev.filter(budget => budget.id !== id))
    setExpenses(prev => prev.filter(expense => expense.budgetId !== id))
  }

  function deleteExpenses({ id }) {
    setExpenses(prev => prev.filter(expense => expense.id !== id))
  }

  return (
    <BudgetContext.Provider value={{
      budgets,
      expenses,
      getExpenses,
      addExpenses,
      addBudgets,
      deleteBudgets,
      deleteExpenses
    }}>
      {children}
    </BudgetContext.Provider>
  )
}