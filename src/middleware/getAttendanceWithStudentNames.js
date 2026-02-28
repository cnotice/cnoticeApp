
//  this page is not required
console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
const mongoose = require('mongoose');
// const user = require('../models/user');
const {ObjectId} = require('mongodb');
// const {ObjectId} = require('bson');
const Attendance = require('../models/attendance');
console.log("attendanceId");

async function getAttendanceWithStudentNames(attendanceId){
console.log(attendanceId);
const idObj = new ObjectId(attendanceId);
const result = await Attendance.aggregate([
    { $match:{ _id:
        new mongoose.Types.ObjectId(attendanceId)
    }
},
{$unwind:"$registration"},
{$lookup:{
    from:"user",
    let:{rollNumber : "$registration.roll"},
    pipeline:[
        {$unwind:"$studentbssd"},
        {$match:{
            $expr:{$eq: ["studentbssd.roll","$$rollNumber"]},
            designation:"student"
        }},
        {$project:{name:1,_id:0}}
    ],
    as:"matchedUser"
}
},
{$addFields:{ "registration.name":{$cond:[{$gt:[{$size:"$matchedUser"},0]},
{$arrayElemAt:["$matchedUser.name",0]},
"Unregistered Student"
]
}
}
},
{$group:{
_id:"$_id",
registration:{$push:"$registration"}
}}
]);
return result[0]|null;
}
module.exports = getAttendanceWithStudentNames;