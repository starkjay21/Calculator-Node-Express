const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/", function (req, res){
    res.send("Result:"+(parseInt(req.body.num1)+parseInt(req.body.num2)))
})

app.listen(3000, ()=>{
    console.log("Your app started at https://localhost:3000")
})
