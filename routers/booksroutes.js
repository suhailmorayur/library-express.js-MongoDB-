const express = require('express')
const { getAllBooks, getBookbyid, addNewBook, updateBook, deleteBook } = require('../controllers/booksController')
const router = express.Router()

//Get all books
router.get('/', getAllBooks)

//Get book by id
router.get('/:bookid', getBookbyid)

//Add a new book
router.post('/', addNewBook)
//Update book
router.patch('/:bookid',updateBook)

  //Delete book
router.delete('/:bookid', deleteBook)

module.exports = router