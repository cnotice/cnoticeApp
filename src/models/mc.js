const mongoose = require ('mongoose');

const Mc = mongoose.model('Mc',{
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
    correcta:{
        type: String
    },
    wrongb:{
        type: String
    },
    wrongc:{
        type: String
    },
    wrongd:{
        type: String
    },
    writtenDate:{
        type: String
    }
})


module.exports = Mc