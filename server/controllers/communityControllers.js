//importing our model/schema
const Community = require('../models/communityModel');

const asyncHandler = require('express-async-handler')


const getCommunity = asyncHandler(async(req, res) => {
    //mongoDB query
    //find all posts that belong to that particular user
    const community = await Community.find();
    res.json(community)


})

module.exports = {getCommunity}