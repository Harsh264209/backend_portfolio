
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')
const app=express()
require('dotenv').config();
const Visitor=require('./Models/Users')
const Router =require('./Api/Routes')
const port=process.env.port || "mongodb://localhost:27017"
const dburl=process.env.Mongo_Url || "mongodb://localhost:27017"
"mongodb://0.0.0.0:27017"

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["POST","GET"],
    credentials:true
}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

mongoose.connect(dburl).then(()=>{
    console.log("Mongo Connection success")
})
    
app.use('/',Router)
app.use('/new',Router)
app.use('/fetch',Router)
app.use('/newproject',Router)
app.use('/inquires',Router)


app.get('/',(req,res)=>{
    res.json({message:"Welcome server 🤩🤩"})
})

    
       
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})