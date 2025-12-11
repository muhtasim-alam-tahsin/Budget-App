import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  BudgetCalculation  from './Component/BudgetCalculation.jsx'
// import App from './App.jsx'
import MainRouter from './MainRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BudgetCalculation>
      <MainRouter />
    </BudgetCalculation>
    
  </StrictMode>,
)
