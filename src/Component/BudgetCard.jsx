import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Stack from 'react-bootstrap/esm/Stack';
import Button from 'react-bootstrap/esm/Button';
import { currencyFormatter } from '../utils';
import { useBudget } from './BudgetCalculation';

export default function BudgetCard({ id, name, amount, max, openAddExpenseClick, openViewExpenseClick }) {

  const { deleteBudgets } = useBudget()

  // function deleteExpense() {
  //   return (prev => prev.filter(expense => expense.id !== id))
  // }
  return (
    <Card>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
          <div className='me-2'>{name}</div>
          <div className='d-flex align-items-baseline'>
            {currencyFormatter.format(amount)}
            <span className='text-muted fs-6 ms-1'>
              / {currencyFormatter.format(max)}
            </span>
          </div>
        </Card.Title>
        <ProgressBar
          className='rounded-pill'
          min={0}
          max={max}
          now={amount}
        />
        <Stack direction='horizontal' gap={2} className='mt-4'>
          <Button className='ms-auto' variant='primary' onClick={openAddExpenseClick}>Add Expense</Button>
          <Button variant='outline-secondary' onClick={openViewExpenseClick}>View Expenses</Button>
          <Button onClick={() => deleteBudgets({ id })}>Delete Budget</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
