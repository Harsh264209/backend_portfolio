
// const express=require('express')
// const mongoose=require('mongoose')
// const cors=require('cors')
// const bodyParser=require('body-parser')
// const app=express()
// require('dotenv').config();
// const Visitor=require('./Models/Users')
// const Router =require('./Api/Routes')
// const port=process.env.port || 4000
// const dburl=process.env.Mongo_Url || "mongodb://0.0.0.0:27017"


// app.use(cors({
//     origin:["https://harsh-portfolio-xi.vercel.app"],
//     methods:["POST","GET"],
//     credentials:true
// }))


// app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.json())

// mongoose.connect(dburl).then(()=>{
//     console.log("Mongo Connection success")
// })
    
// app.use('/',Router)
// app.use('/new',Router)
// app.use('/fetch',Router)
// app.use('/newproject',Router)
// app.use('/inquires',Router)


// app.get('/',(req,res)=>{
//     res.json({message:"Welcome server 🤩🤩"})
// })

    
       
// app.listen(port,()=>{
//     console.log(`Server is running on ${port}`)
// })


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const Visitor = require('./Models/Users');
const Router = require('./Api/Routes');
const port = process.env.PORT || 4000;
const dburl = process.env.Mongo_Url || "mongodb://0.0.0.0:27017";

// Ensure the correct origin URL
// const allowedOrigin = 'https://harsh-portfolio-xwc8.vercel.app';

// const corsOptions = {
//     origin: allowedOrigin,
//     methods: ["POST", "GET", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true
// };


const allowedOrigins = ['https://harsh-portfolio-xwc8.vercel.app', 'https://harsh-portfolio-z2av.vercel.app'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));


// app.use(cors(corsOptions));

// Handle preflight requests for all routes
// app.options('*', cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(dburl).then(() => {
    console.log("Mongo Connection success");
});

app.use('/', Router);
app.use('/new', Router);
app.use('/fetch', Router);
app.use('/newproject', Router);
app.use('/inquires', Router);

app.get('/', (req, res) => {
    res.json({ message: "Welcome server 🤩🤩" });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
