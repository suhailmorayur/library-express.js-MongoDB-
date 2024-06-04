const express = require('express')
const app = express()

const mongoose = require('mongoose');
const booksroutes = require('./routers/booksroutes')
const authorRoutes = require('./routers/authorRoutes')
const port = 3000

app.use(express.json())
app.use('/books', booksroutes)
app.use('/author',authorRoutes)







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().then(()=> console.log("connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://sksuhailmorayur:0Pjqz4S4baxybchX@cluster0.imarqvk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

}

