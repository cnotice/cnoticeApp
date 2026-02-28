//251124
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
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
    // {
        section:String, 
        subject:String, 
        author: String,
        text: String,
        caption: String,
    // },
    
        filePath:String,
    },
    {
        timestamps: true,
    },
);

const Notice = mongoose.model('Notice',ImageSchema);
module.exports = Notice;

// 251124






// //was working b4 251124
// const mongoose = require ('mongoose');
// const Notice = mongoose.model('Notice',{
//     institute:{
//         type: Array
//     },
//     degree:{
//         type:Array
//     },
//     branch:{
//         type: Array
//     },
//     // section: {
//     //     type: String
//     // },
//     semester: {
//         type: Array
//     },
//     // department: {
//     //     type: String
//     // },
//     subject:{
//         type: String
//     },
//     author:{
//         type: String
//     },
//     designation:{
//         type: String
//     },
//     subjectnotice:{
//         type: mongoose.Schema.Types.ObjectId,
//         // required: true,
//         ref: 'Sub'
//     },
//     text:{
//         type: String
//     },
//     filePath:String,
// })


// module.exports = Notice