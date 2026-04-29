const mongoose = require ('mongoose');

// const Degree = mongoose.model('Degreeccbb',{
const degreeSchema = new mongoose.Schema({
                    // let d = req.body.department ;
                    // let dsd = b + s+ d;
                        // dsd: b+s+depart, 
    dsd:{
        type: String
        // ,
        // unique:true
    },
    totalYear: {
        type: String
    },
    shortName: {
        type: String
    },
    postalPinCode: {
        type: String
    },
    semester: {
        type: String
    },
    department: {
        type: String 
    },
    shortnamePostalPinCodeDepartment: {
        type: String,
        unique:true,
        required: true
    },
    degree:{
        type: String
    },
    courseDuration:{
        type: String
    },
    semesterSystemStatus:{
        type: Boolean
    },
    yearStartMonth:{
        type: String
    },
    yearEndMonth:{
        type: String
    },
    semesterOddStart:{
        type: String
    },
    semesterOddEnd:{
        type: String
    },
    semesterEvenStart:{
        type: String
    },
    semesterEvenEnd:{
        type: String
    },
    author:{
        type: String
    },
        institute:{
            type: mongoose.Schema.Types.ObjectId,
            // required: true,
            ref: 'Institute'
        },
})



// degreeSchema.virtual('degreeReal',{
//     ref: 'Sub',
//     localField : '_id',
//     foreignField : 'degreeId'
// })


degreeSchema.methods.generateUpdateDegree = async function(data){
    const {semesterSystemStatus, semesterOddStart, semesterOddEnd, semesterEvenStart, semesterEvenEnd, yearStartMonth, yearEndMonth} = data;
    const user = this;
     user.semesterSystemStatus = semesterSystemStatus;
    user.semesterOddStart = semesterOddStart; 
    user.semesterOddEnd = semesterOddEnd;
     user.semesterEvenStart = semesterEvenStart; 
     user.semesterEvenEnd = semesterEvenEnd;
     user.yearStartMonth = yearStartMonth;
     user.yearEndMonth = yearEndMonth;
    
    // user.bssds = user.bssds.concat(data)
    await user.save();
    
    return user;
}
// commented below 260127
// const Degree = mongoose.model('Degreeccbb',degreeSchema)
const Degree = mongoose.model('Degree',degreeSchema)
module.exports = Degree