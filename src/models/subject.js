const mongoose = require ('mongoose');


const userSchema = new mongoose.Schema({


// const Sub = mongoose.model('Sub',{
    branch:{
        type: String
    },
    year: {
        type: String
    },
    totalYear: {
        type: Number
    },
    yearStart: {
        type: Number
    },
    yearEnd: {
        type: Number
    },
    seasonYearStart: {
        type: Number
    },
    seasonYearEnd: {
        type: Number
    },
    startMonth: {
        type: Number
    },
    endMonth: {
        type: Number
    },
    semester: {
        type: String
    },
    degree: {
        type: String
    },
    subject:{
        type: String
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    degreeId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Degree'
    },
    bssd:{
        type: String
    },
    attRegisFlag:{
        type: Boolean
    }
})



userSchema.virtual('subjectnotices',{
    ref: 'SubjectNotice',
    localField : '_id',
    foreignField : 'subjectId'
    // foreignField : 'subjectnotice'
})

userSchema.virtual('keywords',{
    ref: 'Kw',
    localField : '_id',
    foreignField : 'subjectId'
    // foreignField : 'subjectkeywords'
})

userSchema.virtual('attendances',{
    ref: 'Att',
    localField : '_id',
    foreignField : 'subjectId'
    // foreignField : 'subjectAttendance'
})


// 011224
userSchema.virtual('studyaccounts',{
    ref: 'Sa',
    localField : '_id',
    foreignField : 'subjectId'
})


userSchema.virtual('fcs',{
    ref: 'Fc',
    localField : '_id',
    foreignField : 'subjectId'
})

userSchema.virtual('ows',{
    ref: 'Ow',
    localField : '_id',
    foreignField : 'subjectId'
})
userSchema.virtual('mcs',{
    ref: 'Mc',
    localField : '_id',
    foreignField : 'subjectId'
})
// 011224


const Sub = mongoose.model('Sub',userSchema)


module.exports = Sub