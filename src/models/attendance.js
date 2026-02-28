const mongoose = require ('mongoose');
const attSchema = new mongoose.Schema({
    subjectId:{
        // subjectattendance:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sub',
        unique:true
    },
    subjectname:{
        type: String
    },
    author:{
        type: String
    },
    subjectAuthor:{
        type: String
    },
    registration:
        [{
            roll :
            {
            // type: Array
            type: String
            },
            name:{
                type : String
         
       }
        }]
    ,
    // register:{
    //     type:Array
    // }
    // ,
    attendances:
    [{
        attendance :
        {
        type: Array
        },
        date:{
            type : String
     
   }
    }]
})
const Att = mongoose.model('Att',attSchema)

module.exports = Att

// const Att = mongoose.model('Att',{
//     branch:{
//         type: String
//     },
//     section: {
//         type: String
//     },
//     semester: {
//         type: String
//     },
//     department: {
//         type: String
//     },
//     subject:{
//         type: String
//     },
//     author:{
//         type: String
//     },
//     attendance:{
//         type: Boolean
//     }
// })


// module.exports = Att