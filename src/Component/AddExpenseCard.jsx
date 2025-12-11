import { useRef } from "react"
import { useBudget } from "./BudgetCalculation"
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const AddExpenseCard = ({ show, handleClose }) => {
    const descriptionRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    const { addExpenses, budgets } = useBudget()

    function handleSubmit(e) {
        e.preventDefault()
        addExpenses({
            description: descriptionRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budgetId: budgetIdRef.current.value
        })
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descriptionRef} type='text' required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control ref={amountRef} type='number' min={0} step={0.01} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Budget</Form.Label>
                        <Form.Select ref={budgetIdRef}>
                            {budgets.map(budget => (
                                <option key={budget.id} value={budget.id}>
                                    {budget.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Button variant='primary' className='me-4' type='submit'>Add</Button>
                </Modal.Body>
            </Form>
        </Modal>
    )
}

export default AddExpenseCard