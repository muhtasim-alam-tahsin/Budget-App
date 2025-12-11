import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/esm/Stack'
import Button from 'react-bootstrap/esm/Button'
import { useBudget } from './BudgetCalculation'
import { currencyFormatter } from '../utils'
export default function ViewExpenseCard({ budgetId, handleClose }) {
    const { getExpenses, budgets, deleteBudgets, deleteExpenses } = useBudget()

    const expenses = getExpenses(budgetId)
    const budget = budgets.find(b => b.id === budgetId)

    return (
        <Modal show={budgetId != null} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Stack direction="horizontal" gap="2">
                        <div>Expenses - {budget?.name}</div>
                        {budget && (
                            <Button
                                onClick={() => {
                                    deleteBudgets(budget)
                                    handleClose()
                                }}
                                variant="outline-danger"
                            >Delete
                            </Button>
                        )}
                    </Stack>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack direction="vertical" gap="3">
                    {expenses.map(expense => (
                        <Stack direction="horizontal" gap="2" key={expense.id}>
                            <div className="me-auto fs-4">{expense.description}</div>
                            <div className="fs-5">
                                {currencyFormatter.format(expense.amount)}
                            </div>
                            <Button
                                onClick={() => deleteExpenses(expense)}
                                size="sm"
                                variant="outline-danger"
                            >
                                &times;
                            </Button>
                        </Stack>
                    ))}
                </Stack>
            </Modal.Body>
        </Modal>
    )
}