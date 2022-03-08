//importing our model/schema
const Post = require('../models/communityModel');

const asyncHandler = require('express-async-handler')


const getPost = asyncHandler(async(req, res) => {
    //mongoDB query
    //find all posts that belong to that particular user
    const post = await Post.find({user: req.user._id});
    res.json(post)


})

//handling create post
const createPost = asyncHandler( async(req, res) => {
    //requirements from user
    const { title, content, pic } =req.body;
    //if there are any field didn't fill then
    if (!title || !content) {
        res.status(400);
        //throw this error
        throw new Error('please fill all the fields');
    }//if all fields are filled then create a new post
    else{
        const post = new Post ({user: req.user._id, title, content, pic});

        //save them in the database
        const createdPost = await post.save();

        //receive it here and sendet to user
        res.status(201).json(createdPost)
    }
});

const getPostById = asyncHandler( async (req, res) => {
    //mongoDB query to find by id this id is from communityControllers
    const post = await Post.findById(req.params.id);

    if(post) {
        res.json(post);
    }
    else{
        res.status(404).json({message: 'Post not found'});
    }
});

const updatePost = asyncHandler( async (req, res) =>{
    //what can a user update/edit
    const { title, content, pic } = req.body;

    //finding the post
    const post = await Post.findById(req.params.id);
    //finding out if the post requesting from the user belong him or not
    //compering user to current logged in user
    if(post.user.toString() !== req.user._id.toString()) {
        //if it is not equal response with 401 status
        res.status(401);
        throw new error("you can't perform this action");
    }

    //if this id is right and request is authorized
    if (post) {
        post.title = title;
        post.content = content;
        post.pic = pic;

        //save them to the database
        const updatedPost = await post.save();
        //we've updated
        res.json(updatedPost);
    }//if post not found
    else{
        res.status(404)
        throw new error("post not found");
    }
})

const deletePost = asyncHandler( async (req, res) => {
    //first finding out if this post already exists
    const post = await Post.findById(req.params.id);
    //finding out if the post requesting from the user belong him or not
    //compering user to current logged in user
    if(post.user.toString() !== req.user._id.toString()) {
        //if it is not equal response with 401 status
        res.status(401);
        throw new error("you can't perform this action");
    }

    if(post){
        //make request to remove this post
        await post.remove();
        //response that was removed
        res.json({ message: "post removed successfully"}) 
    }//if not found 
    else {
        res.status(404);
        throw new error("post not found");
    }
})

module.exports = {getPost, createPost, getPostById, updatePost, deletePost}