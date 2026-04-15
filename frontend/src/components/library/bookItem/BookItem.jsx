import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Star, StarFill, StarHalf } from 'react-bootstrap-icons'

export default function BookItem({ book }) {
    return (
        < div >
            {
                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        variant='top'
                        height={400}
                        src={book.imageUrl} />
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Subtitle>{book.author}</Card.Subtitle>
                        <Button variant="primary">Actualizar Titulo</Button>
                    </Card.Body>
                </Card>
            }
        </div >
    )
}