// Importaciones generales
import React, { useState } from 'react'
import initialBooks from '../../data/books.json'

// Importacion de components
import Books from '../library/books/Books'
import NewBook from '../library/newBook/NewBook'

export default function Dashboard() {
    const [books, setTotalBooks] = useState(initialBooks);

    const handleBookAdded = (newBook) => {
        setTotalBooks(prev => [...prev, { ...newBook, id: newBook.id ?? crypto.randomUUID() }]);
    };

    return (
        <div>
            <Books books={books} />
            <NewBook onBookAdded={handleBookAdded} />
        </div>
    )

}
