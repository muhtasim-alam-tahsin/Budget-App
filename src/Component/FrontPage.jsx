import Container from "react-bootstrap/esm/Container"
import Button from "react-bootstrap/esm/Button"
import { useNavigate } from "react-router-dom"

export default function FrontPage() {
    const navigate = useNavigate()

    function handleNavigate(){
        navigate("/dashboard")
    }
    return (
        <Container className="d-flex justify-content-center align-items-center flex-column" style={{ height: "100vh" }}>
            <h1 className="text-center mb-4">Welcome to Personal Budget Tracker App</h1>
            <p className="text-center mb-4">Manage your budgets and expenses efficiently</p>
            <Button variant="primary" onClick={handleNavigate}>Enter App</Button>
        </Container>
    )
}
