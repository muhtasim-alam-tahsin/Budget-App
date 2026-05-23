import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import BudgetCard from './Component/BudgetCard'
import AddBudgetCard from './Component/AddBudgetCard';
import { useState } from 'react';
import { useBudget } from './Component/BudgetCalculation';
import AddExpenseCard from './Component/AddExpenseCard';
import ViewExpenseCard from './Component/ViewExpenseCard';
import TotalBudgetCard from './Component/TotalBudgetCard';
function App() {

  const [showAddBudgetCard, setShowAddBudgetCard] = useState(false)
  const [showAddExpenseCard, setShowAddExpenseCard] = useState(false)
  const [addExpenseModalId,setAddExpenseModalId] = useState()
  const [viewExpenseModalId,setViewExpenseModalId] = useState()
  const {budgets, getExpenses} = useBudget()

  function openAddExpenseModal(budgetId){
    setShowAddExpenseCard(true)
    setAddExpenseModalId(budgetId)
  }

  return (
    <>
      <Container className='my-4'>
        <Stack direction='horizontal' gap="2" className='mb-4'>
          <h1 className='me-auto'>Budgets</h1>
          <Button variant='primary' onClick={() => setShowAddBudgetCard(true)}>Add Budget</Button>
          <Button variant='outline-primary' onClick={()=>setShowAddExpenseCard(true)}>Add Expenses</Button>
        </Stack>
        <div
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          //   gap: "1rem",
          //   alignItems: "flex-start",
          // }}
        >
          {budgets.map(budget => {
          const amount = getExpenses(budget.id).reduce(
            (total, expense) => total + expense.amount,
            0
          )
          return (
            <BudgetCard
            key={budget.id}
            id={budget.id}
            name={budget.name}
            amount={amount}
            max={budget.max}
            openAddExpenseClick={() => openAddExpenseModal(budget.id)}
            openViewExpenseClick={() => setViewExpenseModalId(budget.id)}
          />
          )
        })}
        <TotalBudgetCard/>
        </div>
        
      </Container>
      <AddBudgetCard show={showAddBudgetCard} handleClose={() => setShowAddBudgetCard(false)} />
      <AddExpenseCard show={showAddExpenseCard} handleClose={()=>setShowAddExpenseCard(false)} defaultBudgetId={addExpenseModalId}/>
      <ViewExpenseCard
        budgetId={viewExpenseModalId}
        handleClose={() => setViewExpenseModalId()}
      />
    </>
  )
}

export default App
