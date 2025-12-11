import { useBudget } from "./BudgetCalculation";
//import BudgetCard from "./BudgetCard";
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { currencyFormatter } from "../utils";

export default function TotalBudgetCard() {
    const { budgets, expenses } = useBudget()
    const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0)
    const max = budgets.reduce((total, budget) => total + budget.max, 0)
    if (max === 0) return null

    return (
        <Card>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
                    <div className='me-2'>Total</div>
                    <div className='d-flex align-items-baseline'>
                        {currencyFormatter.format(totalAmount)}
                        <span className='text-muted fs-6 ms-1'>
                            / {currencyFormatter.format(max)}
                        </span>
                    </div>
                </Card.Title>
                <ProgressBar
                    className='rounded-pill'
                    min={0}
                    max={max}
                    now={totalAmount}
                />
            </Card.Body>
        </Card>
    )

}
