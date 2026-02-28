const express = require ('express');
const mongoose = require('mongoose');
const Attendance = require('../models/attendance');
const User = require('../models/user');
const Subject = require('../models/subject');
const router = new express.Router();

//////////////////////////////////////////////////////270624

router.post('/attendanceRegistration', async(req,res)=>{
    console.log("got til here");
    // const updates = Object.keys(req.body);
    // const allowedUpdates = ['name', 'designation', 'password', 'age']
    // const isValidOperation = updates.every((update)=> allowedUpdates.includes(update));
    
    // if(!isValidOperation){
    //     return res.status(400).send({error:'Invalid updates!'});
        const att = new Attendance(req.body)
        console.log(req.body)
    // }
    try{
       
        await att.save()
        res.send(att)
    } catch(e){
        res.status(400).send(e);
    }
})
///////////////////////////////////////////////////////270624

router.post('/attendance',async (req,res)=>{
    console.log("getting")
    // let dateData = 23 ;
    const attendance = new Attendance({
        ...req.body,
        // attendances: [{attendance : req.body.attendance, date: 'static'}]
        attendances: [{attendance : req.body.attendance, date: req.body.dateData}]
    })
    // console.log(attendance);
    // attendance.save().then(()=>{
    //     res.status(201).send(attendance)
    // }).catch((e)=>{
    //     res.status(400).send(e);
    // })
///////////
try{
    const existingDocument = await Attendance.findOne({
        subjectId : req.body.subjectId
    })
    
// const update = {attendances: [{attendance : req.body.attendance}]};
    if(existingDocument){
        console.log("existingDocument")
        
    const existingDocumentDate = await Attendance.findOne({
        subjectId : req.body.subjectId,
        // 'attendances.date' : 'static'
        // 'attendances.date' : dateData
        'attendances.date' : req.body.dateData
    })
    if(existingDocumentDate){
        console.log("existingDocumentDate")
        // console.dir(existingDocumentDate,{depth:null, colors:true})
        console.log(JSON.stringify(existingDocumentDate,null,2))
        // const filter = {'attendances.date' : 'static'}; //  was newstatic dateData
        const filter = {subjectId : req.body.subjectId,'attendances.date' : req.body.dateData}; //  was newstatic dateData
        // const update = { $set: { 'attendances.$.attendance' : req.body.attendance,'attendances.$.date' : 'staticUpdated' }};
        // const update = { $set: { 'attendances.$.attendance' : req.body.attendance,'attendances.$.date' : dateData }};
        const update = { $set: { 'attendances.$.attendance' : req.body.attendance,'attendances.$.date' :  req.body.dateData }};
        // console.log(filter);
        // console.log(update);
        console.log("Update Filter: ", filter);
console.log("Update Data: ", update);

        Attendance.findOneAndUpdate(filter, update
            // , {new : true}
        //     , (err,res)=>{
        //     if(err){
        //         console.error(err);
        //     }else{
        //         console.log(res)
        //     }
        // } 
        )
        .then(()=>{
            console.log("existingDocumentDateSebd")
            // console.log(attendance)
            console.log(JSON.stringify(attendance,null,2))
            res.status(201).send(attendance);
        });
    }else{
        //new attendance wrt date static
        console.log("existingDocumentDateconcat")

// existingDocument.attendances = existingDocument.attendances.concat({attendance : req.body.attendance, date: 'Newstatic'}) 

// existingDocument.attendances = existingDocument.attendances.concat({attendance : req.body.attendance, date: dateData}) 

existingDocument.attendances = existingDocument.attendances.concat({attendance : req.body.attendance, date: req.body.dateData}) 
await existingDocument.save().then(()=>{
    res.status(201).send(attendance)
});
// return existingDocument;
    }

    }
    /////////////////was important but this should not exist or it will be a bug
    // else{
    //     console.log("create")
    //     await Attendance.create(attendance);
    //     res.status(201).send(attendance)
    // }
}catch(e){
    console.log(e)
    res.status(400).send(e);
}
// ///////

})


// router.get('/attendance/:subjectid',(req,res)=>{
//     const subjectId = req.params.subjectid;
//     console.log(subjectId);
//     Attendance.findOne({subjectId:subjectId}).then((attendance)=>{
//         res.send(attendance)
//     }).catch((e)=>{
//         res.status(500).send();
//     })
// })

router.get('/attendance/:subjectid',async(req,res)=>{


    const subjectId = req.params.subjectid;
    // console.log(subjectId);
    // Attendance.findOne({subjectId:subjectId}).then((attendance)=>{
    //     res.send(attendance)
    // }).catch((e)=>{
    //     res.status(500).send();
    // })
////////////////////////////////////250425
    try{

    ///////////
    // async function getRegistrationsWithNames() {
        const attData = await Attendance.findOne({subjectId:subjectId});
    
if (!attData) {
    return res.status(404).json({ error: 'Attendance not found' });
}   

// 250524
const subjectData = await Subject.findOne({_id:subjectId});
if (!subjectData) {
    return res.status(404).json({ error: 'Subject not found' });
}
// 250524

// extract rolls directly from the single document
const allRolls = attData.registration.map(r => r.roll);

        // Step 1: Collect all rolls from Att model
        // const allRolls = attData.flatMap(att => att.registration.map(r => r.roll));
    
        // Step 2: Find all users with matching roll in any studentbssd object
        const users = await User.find({
            "studentbssd.roll": { $in: allRolls },
            "studentbssd.year": subjectData.year // 250524 make instute and other changes later
        });
    
        // Step 3: Create a roll-to-name map from user.studentbssd
        const rollToName = {};
        users.forEach(user => {
            user.studentbssd.forEach(s => {
                if (s.roll) {
                    rollToName[s.roll] = user.name;
                }
            });
        });
    
        // Step 4: Merge the names into registration
        // const results = attData.map(att => {
        //     const updatedRegistration = att.registration.map(reg => ({
        //         roll: reg.roll,
        //         name: rollToName[reg.roll] || "Name not found"
        //     }));
        //     return {
        //         // subjectId: att.subjectId,
        //         // subjectname: att.subjectname,
        //         registration: updatedRegistration
        //     };
        // });
        const updatedRegistration = attData.registration.map(reg => ({
            roll: reg.roll,
            name: rollToName[reg.roll] || "Not Registered"
        }));

        const result = {
            subjectId: attData.subjectId,
            subjectname: attData.subjectname,
            registration: updatedRegistration,
            attendances: attData.attendances || [] ,
        };

    // afeter
    
    res.status(200).json(result);
        // return results;
    // }
    ////////////
    } catch(err){
        console.error('Error fetching registrations with names:', err);
        res.status(500).json({ error: 'Server error' });

    }
// let test22 = getRegistrationsWithNames();
// console.log(test22);
// console.log(test22.subjectname);

///////////////////////////////////////////250425


    // const subjectId = req.params.subjectid;
    // console.log(subjectId);
    // Attendance.findOne({subjectId:subjectId}).then((attendance)=>{
    //     res.send(attendance)
    // }).catch((e)=>{
    //     res.status(500).send();
    // })
})


router.patch('/updateRegistration',async(req,res)=>{

    // const session = await mongoose.startSession();
    // session.startTransaction()

    try{
        // const xxx = req.body;

        // if(!xxxa || !xxxb | xxxc){
        //     throw new Error('Invalid or incomplete data. Ensure all fields are provided.')
        // }

        const id = req.body.subjectId ;
        const fff = Subject.findByIdAndUpdate(id,{attRegisFlag: true},{new:true, runValidators: true})

        
        const ddd = Attendance.updateOne({subjectId:req.body.subjectId},{registration:req.body.registration},{upsert: true , new:true})

    const[ xxx, yyy] = await Promise.all([fff, ddd]);

    // await session.commitTransaction();
    // session.endSession();

    res.status(200).json({success: true, fff: xxx, ddd: yyy});
        
        
    }catch(error){
        // await session.abortTransaction();
        // session.endSession();

        res.status(500).json({success:false, error: error.message});
    }
    // console.log("req.body");
    // 6767e705fba49050802eb971
    // console.log(req.body.subjectId);
    // try{

        // const _id = req.body.subjectId ;
        // const fff = await Subject.findByIdAndUpdate(_id,{attRegisFlag: true},{new:true, runValidators: true})
    //     if(!fff){
    //         console.log("not found")
    //     }
    //     console.log(fff);
    // }catch(e){
    //     console.log(e);
    // }
    // Attendance.updateOne({subjectId:req.body.subjectId},{registration:req.body.registration},{upsert: true }).then((attendance)=>{
    //     res.send(attendance)
    // }).catch((e)=>{
    //     res.status(500).send();
    // })
})
module.exports = router;