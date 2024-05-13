
const express=require('express')
const mongoose=require('mongoose')
const Visitor=require('../Models/Users')
const NewProject=require('../Models/ProjectDetails')
const Router = express.Router();


Router.post('/new',async(req,res)=>{

    
    try {
        
        const {name,email,message}=req.body

        const user=await new Visitor({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message
        })
    
        await user.save()
        res.json({message:"message send successfully"})
    } 
    catch (error) {
        res.status(400).json({error:error})
    }    
   
    })
    



Router.get('/fetch',async(req,res)=>{

    try {
        const {name,email,message}=req.body
        const visitors=await Visitor.find()
    
        res.json({message:"users fetched duccessfully",visitors})
    } catch (error) {
        
        res.status(400).json({error:error})
    }
})


Router.post('/newproject', async (req, res) => {
    try {
        const { name, email, message, projectType, budget } = req.body;

        const newProject = new NewProject({
            name: name,
            email: email,
            message: message,
            projectType: projectType,
            budget: budget
        });

        await newProject.save();
        res.json({ message: "New project created successfully", data: newProject });
    } catch (error) {
        console.error("Error in /newproject:", error);
        res.status(400).json({ error: error.message });
    }
});


Router.get('/inquires',async(req,res)=>{

try {
    const {name,email,message,projectType,budget}=req.body

    const inquires=await NewProject.find()
    
    res.json({inquires:inquires})

} catch (error) {
    

    res.status(400).json({message:'Failed to fetch Inquires'})
}


})



module.exports = Router;