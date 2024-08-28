const User = require('../models/userModel');

const profileController = {
    edit: async(req, res) =>{
        try {
            const { userId, username, avatar } = req.body;
            await User.findByIdAndUpdate(userId,{
                username: username,
                avatar: avatar,
            })
            const user = await User.findById(userId);
            res.status(200).json({user  });
        } catch (error){
            res.status(500).json({ error: error.message });
        }
    },
}
module.exports = profileController;