

const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }).then(() => {
      console.log('Connected to MongoDB');
  }).catch(err => {
      console.error('Error connecting to MongoDB', err);
  });
};

module.exports = connectDatabase;