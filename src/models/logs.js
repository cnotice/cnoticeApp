// id 
// date time
// what string: created fc
// how many? no need

// statusLogin : only me [ a side status to display or not] 
// statusLogout : only me[]
// status online/offline- onlly me[]


const mongoose = require ('mongoose');

const logsSchema = new mongoose.Schema({
    loggerId:{
        type: String
    },
    date:{
        type: String
    },
    item:{
        type: String
    }
})
const Log = mongoose.model('Log',logsSchema)


module.exports = Log