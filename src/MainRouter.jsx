import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FrontPage from './Component/FrontPage'
import App from './App'

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/dashboard" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}
