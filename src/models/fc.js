const mongoose = require ('mongoose');

const Fc = mongoose.model('Fc',{
    subjectId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sub'
    },
    // 250926
    institute:{
        type: String
    },
    branch:{
        type: String
    },
    semester:{
        type: String
    },
    section:{
        type: String
    },
    department:{
        type: String
    },
    year:{
        type: String
    },
    // 250926
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


module.exports = Fc