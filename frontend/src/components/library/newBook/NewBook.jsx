import React, { useState } from 'react'
import { Form, Row, Col, Button, Card } from 'react-bootstrap'

export default function NewBook({ onBookAdded }) {

    const [title, setTitle] = useState("");
    const [autor, setAuthor] = useState("");
    const [rating, setRating] = useState("");
    const [pages, setPages] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [available, setAvailable] = useState("");

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value);
    }

    const handleChangeRating = (event) => {
        setRating(event.target.value);
    }

    const handleChangePages = (event) => {
        setPages(event.target.value);
    }

    const handleChangeImageUrl = (event) => {
        setImageUrl(event.target.value);
    }

    const handleChangeAvailable = (event) => {
        setAvailable(event.target.check);
    }

    const handleBookAdded = (e) => {
        e.preventDefault();
        const dataNewBook = {
            title,
            autor,
            rating,
            pages,
            imageUrl,
            available
        };
        onBookAdded(dataNewBook);
        setTitle('');
        setAuthor('');
        setRating('');
        setPages('');
        setImageUrl('');
        setAvailable('');
    }

    return (
        <Card className='m-5 bg-dark text-light'>
            <Card.Body>
                <Form onSubmit={handleBookAdded}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control type='text' value={title} placeholder='Ingresar titulo' onChange={handleChangeTitle} />
                            </Form.Group >
                        </Col >
                        <Col>
                            <Form.Group>
                                <Form.Label>Autor</Form.Label>
                                <Form.Control type='text' value={autor} placeholder='Ingresar autor' onChange={handleChangeAuthor} />
                            </Form.Group>
                        </Col>
                    </Row >
                    <Row className='my-3'>
                        <Col>
                            <Form.Group>
                                <Form.Label>Rating</Form.Label>
                                <Form.Control type='number' min={1} max={5} value={rating} placeholder='Ingresar cantidad de estrellas' onChange={handleChangeRating} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Páginas</Form.Label>
                                <Form.Control type='number' value={pages} placeholder='Ingresar cantidad de paginas' onChange={handleChangePages} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='my-3'>
                        <Form.Group>
                            <Form.Label>Imágen</Form.Label>
                            <Form.Control type='text' value={imageUrl} placeholder='Ingresar cantidad de paginas' onChange={handleChangeImageUrl} />
                        </Form.Group>
                    </Row>
                    <Row className='d-flex align-items-center'>
                        <Col md={11} className="d-flex flex-column justify-content-end align-items-end">
                            <Form.Check
                                type='switch'
                                label="¿Disponible?"
                                onChange={handleChangeAvailable} />
                        </Col>
                        <Col>
                            <Button type='submit'>Añadir libro</Button>
                        </Col>
                    </Row>
                </Form >
            </Card.Body >
        </Card >
    )
}