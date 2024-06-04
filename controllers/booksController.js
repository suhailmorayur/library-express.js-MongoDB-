const Books = require("./models/booksModel")

const getAllBooks = async (req, res) => { 
  const boooks = await Books.find({})
    res.json(boooks) }

const getBookbyid = async (req, res) => {
  try{
    const book=   await Books.findById(req.params.bookid).exec();
   
       res.status(202).json(book)
     }
     catch(error){
       res.status(404).send("book note found")
     }
  }

const addNewBook = async (req, res) => {
  const bookData = req.body
  const books = new Books (bookData)
  await books.save()
  res.status(202).json(books)
  console.log(bookData)

    
  }
const updateBook = async (req, res) => {
  try{
    const updatedbook= await Books.findByIdAndUpdate(req.params.bookid, req.body,{new:true})
    res.json(updatedbook)
  }
catch(error){
res.send("Author Id Note Found")
  
  }
}
const deleteBook = async (req, res) => {
  try{
    await Books.findByIdAndDelete(req.params.bookid)
    res.status(200).send("deleted")
  }
  catch(error){
    res.status(404).send("Author note Found")
  }
  }





  module.exports = {
    getAllBooks,
    getBookbyid,
    addNewBook,
    updateBook,
    deleteBook
  }