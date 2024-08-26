const User = require('../models/userModel')
const Post = require('../models/postModel')

const likeController = {
    like: async(req, res) => {
        try {
            const {userId, postId} = req.body;
            await Post.findByIdAndUpdate(postId,{
                $push: {likes: userId},
            });
            res.status(201).json({message: "Liked post"});


        } catch (err){
            res.status(500).json({ error: error.message });
        }
    },
    unlike: async(req, res) => {
        try {
            const {userId, postId} = req.body;
            const existingUserLike = await Post.findOne({_id: postId, likes: userId});
            if(existingUserLike) {
                await Post.findByIdAndUpdate(postId,{
                    $pull: {likes: userId},
                });
                res.status(200).json({message: "Unliked post"});
            } else {
                res.status(401).json({message: "You can't unlike this post"});
            }
        } catch (err){
            res.status(500).json({ error: err.message });
        }
}
}

module.exports = likeController;