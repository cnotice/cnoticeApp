const mongoose = require ('mongoose');

const Sa = mongoose.model('Sa',{
    subjectId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sub'
    },
    branch:{
        type: String
    },
    section: {
        type: String
    },
    semester: {
        type: String
    },
    department: {
        type: String
    },
    subject:{
        type: String
    },
    author:{
        type: String
    },
    subjectAuthor:{
        type: String
    },
    topic:{
        type: String
    },
    description:{
        type: String
    }
})


module.exports = Sa