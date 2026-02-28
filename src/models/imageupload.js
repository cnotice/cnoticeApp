const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
    //130824
    {
        institute:String,
        type:String,
    
    // {
        degree:String, 
    // },
    // {
        department:String,
    // },
    // {
        semester:String, 
    // },
    caption:String,
    // {
        section:String, 
        subject:String, 
        author: String,
    // },
    //130824
    
        filePath:String,
    },
    {
        timestamps: true,
    },
);

const Image = mongoose.model('Image',ImageSchema);
module.exports = Image;