import { findBooks, findBook } from '../services/books.service.js';

export const getBooks = (req, res) => {
    const booksDB = findBooks();
    res.send({
        books: booksDB
    })
};

export const getBook = (req, res) => {
    const idParam = parseInt(req.params.id);
    const book = findBook(idParam);
    res.send({
        book: book
    })
}