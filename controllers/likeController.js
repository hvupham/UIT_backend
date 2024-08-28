const User = require('../models/userModel')
const Post = require('../models/postModel')

const likeController = {
    like: async(req, res) => {
        try {
            const {user, postId} = req.body;
            // console.log({user,postId})
            const existingUserLike = await Post.findOne({_id: postId, likes: user});
            if(existingUserLike) {
                await Post.findByIdAndUpdate(postId,{
                    $pull: {likes: user},
                });
                const pos = await Post.findById(postId)
                // console.log(pos)

                res.status(200).json({message: "Unliked post", pos});
            } else {
                await Post.findByIdAndUpdate(postId,{
                    $push: {likes: user},
                });
                const pos = await Post.findById(postId)
                // console.log(pos)
                res.status(200).json({message: "Liked post he", pos});
            }


        } catch (err){
            res.status(500).json({ error: err.message });
        }
}
}

module.exports = likeController;