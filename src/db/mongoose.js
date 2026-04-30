// const mongoose = require ('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/notes-app-api',{
//     useNewUrlParser: true
// })



// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_URL);

// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log(err));
  

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));