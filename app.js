const express  = require('express')
const app = express()



app.listen(3000, () =>{
    console.log("server is working")
})

app.get("/" , (req , res) =>{
    res.send("hello")
})