const mongoose = require("mongoose");


const communitySchema = mongoose.Schema(
    {
        title: {
            type: 'string',
            required: true,
        },
        content: {
            type: 'string',
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        },
        {
            timestamps: true,
        }
    
);

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;