const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'books.json');

function loadBooks() {
    const data = fs.readFileSync('books.json', 'utf8');
    return JSON.parse(data);
}

// Function to save books to the JSON file
function saveBooks(books) {
    const data = JSON.stringify(books, null, 4);
    fs.writeFileSync('books.json', data, 'utf8');
}

// Function to add a new book
function addBook(newBook) {
    const books = loadBooks();
    // Automatically assign an ID to the new book
    newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
    books.push(newBook);
    saveBooks(books);
    console.log('Book added:', newBook);
}

// Function to delete a book by ID
function deleteBook(bookId) {
    let books = loadBooks();
    const initialLength = books.length;
    books = books.filter(book => book.id !== bookId);
    if (books.length === initialLength) {
        console.log('No book found with ID:', bookId);
        return;
    }
    saveBooks(books);
    console.log('Book deleted with ID:', bookId);
}


module.exports = { addBook, deleteBook, loadBooks}
