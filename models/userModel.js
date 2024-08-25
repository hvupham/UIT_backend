const mongoose = require("mongoose");
const { Schema } = mongoose;

const Userschema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'posts', // Tham chiếu đến model post
    }],
  
  },
  { timestamps: true }
);

const User =  mongoose.model("User", Userschema);
module.exports = User;
