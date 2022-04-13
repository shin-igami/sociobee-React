const express = require('express');
const router = express.Router();
const Blog = require('../models/Blogs')
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser')
const multer = require('multer')
const path = require('path')
//storage for images
const storage = multer.diskStorage({
    destination:(req,file,callback) =>{
        callback(null,path.join(__dirname,"../../client/public/uploads/")   )
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname)
    }
})

const upload = multer({storage:storage})

//Get all blogs
router.get('/fetchallblogs',async (req,res)=>{
    try {
     const blog = await Blog.find({})
     res.json({Blog:blog})
    } catch (error) {
     console.log(error.message)
     res.status(500).json("Internal server Error")
    }
 })
//get user specific blog
router.get('/fetchblogs',fetchuser,async (req,res)=>{
    try {
     const blog = await Blog.find({user:req.user.id})
     res.json({Blog:blog})
    } catch (error) {
     console.log(error.message)
     res.status(500).json("Internal server Error")
    }
 })

 //post a blog
 router.post('/addblog',upload.single("image"),fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a valid description').isLength({ min: 5 })
  ],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    if(req.file){
        image = req.file.originalname;
    }else{
        image = req.body.image
    }
    const {title,description} = req.body;
    try {
        const blog = new Blog({image,title,description,user:req.user.id,userName:req.user.name})
        await blog.save();
        res.json(blog)
    } catch (error) {
        console.log(error.message)
        res.status(500).json("Internal server Error")
    }
})

//update a blog
router.put("/updateblog/:id",upload.single("image"),async (req,res)=>{
    const {title,description} = req.body;
    let image;
    if(req.file){
        image = req.file.originalname;
    }else{
        image = req.body.image
    }
   
    const newBlog = {}
    if(title){newBlog.title=title}
    if(description){newBlog.description=description}
    if(image){newBlog.image=image}

    try {
    const blog = await Blog.findById(req.params.id)
    if(!blog){return res.status(401).res("Not Found")}
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,{$set : newBlog},{new:true})
    res.json(updatedBlog)
    } catch (error) {
        console.log(error.message)
        res.status(500).json("Internal server Error")
    }

})

//Route 4 to delete a note   Login Required


router.delete("/deletenote/:id",async (req,res)=>{
    try {
    const blog = await Blog.findById(req.params.id)
    if(!blog){return res.status(401).res("Not Found")}
    const updatedBlog = await Blog.findByIdAndDelete(req.params.id)
    res.send("Success")
    } catch (error) {
        console.log(error.message)
        res.status(500).json("Internal server Error")
    }

})
module.exports = router;