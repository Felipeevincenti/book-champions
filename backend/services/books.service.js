import books from '../data/books.json' with { type: 'json' };

export const findBooks = () => {
    const booksDB = books;
    return booksDB;
}

export const findBook = (id) => {
    const book = books.find((book) => id === book.id)
    return book
}