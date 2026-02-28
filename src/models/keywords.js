const mongoose = require ('mongoose');

const kwSchema = new mongoose.Schema({
    subjectId:{
        // subjectkeywords:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sub'
    },
    author:{
        type: String
    },
    subjectAuthor:{
        type: String
    },
    keywords:[{
        keyword :{
        type: String,
        unique: true
        },
        date:{
            type : String
        }
    }]
})
/////////////////////////////
const Kw = mongoose.model('Kw',kwSchema)
// const Kw = mongoose.model('Kw',{
    
//     subjectkeywords:{
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'Sub'
//     },
//     author:{
//         type: String
//     },
//     keywords:[{
//         keyword :{
//         type: String
//         }
//     }]
// })


module.exports = Kw