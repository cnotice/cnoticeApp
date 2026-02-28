const mongoose = require ('mongoose');

const Ow = mongoose.model('Ow',{
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
    question:{
        type: String
    },
    answer:{
        type: String
    }
})


module.exports = Ow