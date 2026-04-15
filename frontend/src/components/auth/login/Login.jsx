import React, { useState } from 'react'
import { Card, Row, Form, Button, FormGroup, Col, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [mensajes, setMensajes] = useState([])

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setMensajes([]);
        if (!email && !password) {
            setMensajes(prev => [...prev, 'Debes completar los 2 campos'])
            return
        }
        else {
            if (!email.includes('@')) setMensajes(prev => [...prev, 'El formato del email no es válido'])
            if (password.length < 6) setMensajes(prev => [...prev, 'La contraseña debe tener al menos 6 caracteres'])
        }

        if (mensajes.length > 0) return

        navigate("/dashboard")
    }

    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row className="mb-2">
                    <h5>Inicio de sesion</h5>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="email"
                            placeholder="Ingresar email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="password"
                            placeholder="Ingresar contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <Row>
                        <Col />
                        <Col md={6} className="d-flex justify-content-end">
                            <Button variant="secondary" type="submit">
                                Iniciar sesión
                            </Button>
                        </Col>
                    </Row>
                </Form>
                {
                    mensajes.map((mensaje) => (
                        <Alert variant="danger">
                            <p>{mensaje}</p>
                        </Alert>
                    ))
                }
            </Card.Body>
        </Card>
    )
}