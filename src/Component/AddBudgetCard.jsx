import { useRef } from 'react'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button'
import { useBudget } from './BudgetCalculation'

export default function AddBudgetCard({ show, handleClose }) {

    const nameRef = useRef()
    const maxValueRef = useRef()
    const { addBudgets } = useBudget()

    function handleSubmit(e) {
        e.preventDefault()
        addBudgets({
            name: nameRef.current.value,
            max: parseFloat(maxValueRef.current.value)
        })
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type='text' required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Maximum Spending</Form.Label>
                        <Form.Control ref={maxValueRef} type='number' min={0} step={0.01} required />
                    </Form.Group>
                    <Button variant='primary' className='me-4' type='submit'>Add</Button>
                </Modal.Body>
            </Form>
        </Modal>
    )
}
