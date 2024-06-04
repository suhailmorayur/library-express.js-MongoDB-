const Author = require("./models/authorModel")

const getAllAuthor = async (req, res) => {
 const author = await Author.find({})
    res.json(author)
  }
const getAuthorById = async (req, res) => {
  try{
 const author=   await Author.findById(req.params.authorid).exec();

    res.status(202).json(author)
  }
  catch(error){
    res.status(404).send("author note found")
  }
  
  }
const addNewAuthor = async (req, res) => {
   const authordata = req.body
   const author = new Author (authordata)
   await author.save()
   res.status(202).json(author)

  }
const updateAuthorDetails = async (req, res) => {
  try{
    const updatedAuthor= await Author.findByIdAndUpdate(req.params.authorid, req.body,{new:true})
    res.json(updatedAuthor)
  }
catch(error){
res.send("Author Id Note Found")
}
  }
const deleteAuthor = async (req, res) => {
    try{
      await Author.findByIdAndDelete(req.params.authorid)
      res.status(300).send("deleted")
    }
    catch(error){
      res.status(404).send("Author note Found")
    }
  }









module.exports = {
getAllAuthor,
getAuthorById,
addNewAuthor,
updateAuthorDetails,
deleteAuthor,

}