const express = require('express')
const { getAllAuthor, getAuthorById, addNewAuthor, updateAuthorDetails, deleteAuthor } = require('../controllers/authorController')
const router = express.Router()

//Get all author
router.get('/', getAllAuthor)
//Get author by Id
router.get('/:authorid', getAuthorById)

//Add a new author
router.post('/', addNewAuthor)
//Update author details
router.patch('/:authorid', updateAuthorDetails)
//Delete author
router.delete('/:authorid', deleteAuthor)

module.exports = router