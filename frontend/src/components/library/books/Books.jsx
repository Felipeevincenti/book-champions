// Importaciones generales
import React from 'react'

// Importar components
import BookItem from '../bookItem/BookItem'
import ModalDelete from '../../ui/ModalDelete'

export default function Books({ books }) {
    return (
        <div className='d-flex justify-content-between flex-wrap gap-3 m-5'>
            {books.map((book) => (
                < BookItem key={book.id} book={book} />
            ))}
            <ModalDelete
                show={true}
                onClose={() => setShowModal(false)}
                onConfirm={false}
            />
        </div>

    )
}