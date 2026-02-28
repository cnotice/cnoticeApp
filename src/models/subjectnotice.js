const mongoose = require ('mongoose');

const SubjectNotice = mongoose.model('SubjectNotice',{
    subjectId:{
    // subjectnotice:{
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'Sub'
    },
    institute:{
        type: Array
    },
    degree:{
        type:Array
    },
    branch:{
        type: Array
    },
    // section: {
    //     type: String
    // },
    semester: {
        type: Array
    },
    // department: {
    //     type: String
    // },
    subject:{
        type: String
    },
    author:{
        type: String
    },
    subjectAuthor:{
        type: String
    },
    designation:{
        type: String
    },
    text:{
        type: String
    }
})


module.exports = SubjectNotice