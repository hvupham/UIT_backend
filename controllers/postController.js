const Post = require('../models/postModel')
const User = require('../models/userModel')

const postController = {
    create: async(req, res) =>{
        try {
            const { user, caption, image } = req.body;
            
            const newPost = new Post({
                user,
                caption,
                image,
            })
            const savedPost = await newPost.save();
            await User.findByIdAndUpdate(user, {
                $push: { posts: savedPost },
            });
            res.status(201).json({savedPost});

        } catch (error){
            res.status(500).json({ error: error.message });

        }
    },
    delete: async(req, res) =>{
        try {
            const post = await Post.findByIdAndDelete(req.params.id);
            if(!post){
                return res.status(404).json({ message: 'Post not found' });
            }
            res.status(200).json({message: 'Post deleted successfully'});     
        } catch (error){
            res.status(500).json({ error: error.message });
        }
    },
    getAll: async(req,res) =>{
        try {
            const posts = await Post.find()
            .sort({ createdAt: -1 })
            .populate('user', 'username'); // cho phép hiển thị thông tin từ user liên quan
            
            // const username = 
            res.json(posts);
        } catch (error){
            res.status(500).json({ error: error.message });
        }
    }
}
module.exports = postController;