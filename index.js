const express = require("express")
const app = express()

const port = 3001

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/books", (req, res) => {
    res.send({
        "books": [
            {"id" : 1, "name": "Gita" },
            {"id" : 2, "name": "Ramayan" }, 
            {"id" : 3, "name": "Bible" },
            {"id" : 4, "name": "Kuran" }
        ]
    })
})

app.listen(port, () => {
    console.log(`Server is up and listening at port ${port}`)
})