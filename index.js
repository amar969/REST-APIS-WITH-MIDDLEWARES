const express = require("express")
const app = express()

const port = 3001

app.use(logger); 

app.get("/", (req, res, next) => {
    res.send("Welcome to our express server")
})

// Register of routing
app.get("/books", allBooks)
app.get("/book/:name", fetchingBook)


function logger(req, res, next){
    console.log(new Date(), req.method, req.path)
    next()
}

function allBooks(req, res){
     res.send("Fetching all books")
}

function fetchingBook(req, res){
   req.name = req.params.name
   return res.json({"Book Name" : req.name})
}


app.listen(port, () => {
    console.log(`Server is up and listening at port ${port}`)
})