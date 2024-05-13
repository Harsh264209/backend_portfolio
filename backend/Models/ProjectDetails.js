
const mongoose=require('mongoose')

const ProjectDetailsSchema=new mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
    projectType:{type:String,required:true},
    budget:{type:String,required:true}
})

module.exports=mongoose.model('ProjectDetails',ProjectDetailsSchema)