const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth')
const Subj = require('../models/subject');
const User = require('../models/user');


///////SUBJECT WAS USED BY INSTITUTE IN DESIGNATION NOW DEPARTMENT IS USED MAY BE
//////// bUT NOW IS USED BY STUDENT IN DESIGNATION
router.post('/subject', auth, async(req,res)=>{
console.log("this is a test" + req.user.designation)
console.log(req.body)
let subjectFromTea = req.body;

if((subjectFromTea.degree == "null")||(subjectFromTea.branch == "null" )||(subjectFromTea.semester == "null" )||( subjectFromTea.year == "") ||(subjectFromTea.subject == "null") || (subjectFromTea.subject == "") ){
    return res.status(400).send({"error" :"Form incomplete,please fill full form"});
}

    const sub = new Subj({
        ...req.body,
        author: req.user._id
    })

    // sub.save().then(()=>{
    //     res.status(201).send(sub)
    // }).catch((e)=>{
    //     res.status(400).send(e);
    // })
  ////////////////////////////////////////  // 
  
    try{
        if(req.user.designation !== 'teacher'){
            return res.status(401).send({"error" :"unauthorized"});
        }
        
        // Not working  may be exact findone needed , later
        const subGot = req.body ;
        const existing = await Subj.findOne(subGot)
        if (existing){
            return res.status(400).json({done: 'subject exist'});
        }
        // above not working
// 250530

        const subGotCC = req.body.contactcode ;
        console.log(subGotCC);
        // const existing = await Subj.findOne(subGot)
        // if (existing){
        //     return res.status(400).json({done: 'subject exist'});
        // }
        // 250530
        // status(201)

        // const userIs = await User.findOne({_id:req.user._id});
        await User.updateOne(
            {_id:req.user._id},
            {$set:{contactcode:req.body.contactcode}},
        {upsert:true}
        );
        await sub.save();
    let redirect= "hub.html";
        res.status(201).send({sub,redirect});
    }catch(e){
        res.status(500).send(e);
    }
    // //////////////////////
})






router.get('/subject',auth, async(req,res)=>{


    
    //to do:
    //1> Simple display subjects with date of time keeping in mind > DONE
    //2> Simple warning of one month and end/start of new subjects > DONE
    
    // const _id = req.params.id;
    // present year
    // present month
    const year = new Date().getFullYear();
    console.log(year);
    const month = new Date().getMonth()+1;
    console.log(month);
    try{
        // const sub = await Subj.find({author:req.user._id});
        // const sub = await Subj.find({author:req.user._id ,
        //     // ,
        //     // startMonth: { $lte : month},
        //     // endMonth: { $gte: month}
        // });

        

// db.collection.find

// async function findMatchingRanges(userNumber){

const userNumber = month; // current month
    // return Range.find({author:req.user._id ,

    const sub = await Subj.find({author:req.user._id ,
    // return Subj.find({author:req.user._id ,
        
            seasonYearStart: { $lte : year},
            seasonYearEnd: { $gte: year},

        $or:[
            // case1: normal range(start<=end)
            {
                $expr:{
                    $and:[
                        // {$lte:["$start", "$end"]},
                        // {$gte: [userNumber, "$start"]},
                        // {$lte:[userNumber,"$end"]}
                        {$lte:["$startMonth", "$endMonth"]},
                        {$gte: [userNumber, "$startMonth"]},
                        {$lte:[userNumber,"$endMonth"]}
                    ]
                }
            },
            // case 2: wrap areound(start> end)
            {
                $expr:{
                    $and:[
                        {$gt:["$startMonth", "$endMonth"]},
                        {
                            $or:[
                                {$gte:[userNumber, "$startMonth"]},
                                {$lte:[userNumber, "$endMonth"]}
                            ]
                        }
                    ]
                }
            }
        ]
    });
// }

// const userNumber = 3; // current month
// const result = await.findMatchingRanges(userNumber);
// console.log(result);






            // seasonYearStart: { $lte : year},
            // seasonYearStarEnd: { $gte: year}

        // const users = await Subj.find({author:req.user._id}).lean();

        // const allowed = [];

        // for(const user of users) {
        //     if(user.role === "admin" ){
        //         allowed.push(user);
        //     }else if(user.age>18 && user.verified){
        //         allowed.push(user);
        //     }
        // }

        // res.json(allowed);











        // to warn before a month needs even semester end month, year end month
        // 260103 
        // using or gate with and
        // user.find({
        // isactive : true,
        // $or:[
            // {role:"admin"},
            // {role:"moderator"}
        // ]
        // })

        // using regex for 2025 or 2025-26
        // const regex = /^2025(-26)?$/;
        // model.find({
        //     year:{$regex:regex}
        // })

        
        // using regex for 2025 or 2025-26 , 2025-2026
        // const regex = /^2025(-26|2026)?$/;
        // model.find({
        //     year:{$regex:regex}
        // })

        
        // using regex for 2025 or 2025-26 , 2025-2026 dynamic
        // const startyear =2025;
        // const shortend =26;
        // const fullend = 2026;

        // const regex = new RegExp( `^${startyear}(-${shortend}|-${fullend})?$`)
        // model.find({
        //     year:regex
        // })

        // 260103
        if(!sub){
            return res.status(404).send();
        }
        const contactcode = await User.findOne({_id:req.user._id});
        const con = contactcode.contactcode ;
        console.log("contactcode");
        // console.log(contactcode);
        // console.log(contactcode.contactcode);
        console.log(sub);
        console.log("contactcode");
        // res.send([sub,con]);
        // res.send({sub,con});

        
    const hasEndMonth = sub.some(u=>u.endMonth === month);
    let warn = false;
    if(hasEndMonth){
        console.log("last month for one of the subject");
        warn = true;
        return res.send({sub,warn});
    }else{
        warn = false;
        return res.send({sub,warn});
    }
        // res.send(result);
    }catch(e){
        res.status(500).send();
    }
})

router.get('/subjectwoauth',auth, async(req,res)=>{
    console.log(req.user)
    console.log(req.user.studentbssd)
    console.log(req.user.studentbssd[0])
    console.log(req.user.studentbssd[1])
    // console.log(req.user.studentbssd.semester)
    // console.log(req.user.studentbssd.degree)
    // const _id = req.params.id;
        
  const result = req.user.studentbssd;
  console.log(result);
// 250528
//   if (result.length === 0) {
//     return res.status(404).json({ error: "No data found." });
//   }
    // const semester = req.user.studentbssd[0].semester;
    // const branch = req.user.studentbssd[0].branch;
    // const year = req.user.studentbssd[0].year;
    // const degree = req.user.studentbssd[0].degree;
    // second phase
        // const sub = await Subj.find({author:req.user._id});
        // if(!sub){
        //     return res.status(404).send();
        // }
// 250528



    // console.log(semester + branch + year + degree);
    // console.log(req.user.studentbssd[0])
    try{
        // const sub = await Subj.find({semester, branch, year, degree});

        // 260126
        
    
    const year = new Date().getFullYear();
    console.log(year);
    const month = new Date().getMonth()+1;
    console.log(month);

const userNumber = month; // current month

    const sub = await Subj.find({
        
            seasonYearStart: { $lte : year},
            seasonYearEnd: { $gte: year},

        $or:[
            // case1: normal range(start<=end)
            {
                $expr:{
                    $and:[
                        // {$lte:["$start", "$end"]},
                        // {$gte: [userNumber, "$start"]},
                        // {$lte:[userNumber,"$end"]}
                        {$lte:["$startMonth", "$endMonth"]},
                        {$gte: [userNumber, "$startMonth"]},
                        {$lte:[userNumber,"$endMonth"]}
                    ]
                }
            },
            // case 2: wrap areound(start> end)
            {
                $expr:{
                    $and:[
                        {$gt:["$startMonth", "$endMonth"]},
                        {
                            $or:[
                                {$gte:[userNumber, "$startMonth"]},
                                {$lte:[userNumber, "$endMonth"]}
                            ]
                        }
                    ]
                }
            }
        ]
    });

        // const sub = await Subj.find({});
        if(!sub){
            return res.status(404).send();
        }
        // 250326
        const filtered = sub.filter(subs => subs.semester <0); 


        // res.send(filtered);
        // 250326
        res.send(sub);
    }catch(e){
        res.status(500).send();
    }
})
router.get('/stusubject',auth, async(req,res)=>{
    // const _id = req.params.id;
    // i have to use a generateAuth like function to update user student bssd but when it triggers?
    // present year therefore end of this year or next year minding semester end month and year end month
    // 
    
    
    const year = new Date().getFullYear();
    // console.log(year);
    const month = new Date().getMonth()+1;
    // console.log(month);

    // console.log("here i am");
    
    try{
        if(req.user.designation !== 'student'){
    // console.log("this is i am");
            return res.status(401).send({"error" :"unauthorized"});
        }
        // 250921 changed on this date, change it it otherthan stusubject in home do not work

        // const sub = await Subj.find({branch:req.user.studentbssd[0].branch});
        // changed 260121
        // const sub = await Subj.find({branch:req.user.studentbssd[0].branch,semester:req.user.studentbssd[0].semester});
        // changed 260121
        // 2500921 changed on this date, change it it otherthan stusubject in home do not work
        // const sub = await Subj.find({bssd:req.user.bssd});
        
const userNumber = month; // current month

        await req.user.generatePromotion();
        // const bssd = await user.generateBssd(req.body)
    const sub = await Subj.find({
        branch:req.user.studentbssd[0].branch,
        semester:req.user.studentbssd[0].semester,
        
            seasonYearStart: { $lte : year},
            seasonYearEnd: { $gte: year},

        $or:[
            // case1: normal range(start<=end)
            {
                $expr:{
                    $and:[
                        // {$lte:["$start", "$end"]},
                        // {$gte: [userNumber, "$start"]},
                        // {$lte:[userNumber,"$end"]}
                        {$lte:["$startMonth", "$endMonth"]},
                        {$gte: [userNumber, "$startMonth"]},
                        {$lte:[userNumber,"$endMonth"]}
                    ]
                }
            },
            // case 2: wrap areound(start> end)
            {
                $expr:{
                    $and:[
                        {$gt:["$startMonth", "$endMonth"]},
                        {
                            $or:[
                                {$gte:[userNumber, "$startMonth"]},
                                {$lte:[userNumber, "$endMonth"]}
                            ]
                        }
                    ]
                }
            }
        ]
    });

   
    // console.log(sub);

        if(!sub){
            return res.status(404).send();
        }
    const hasEndMonth = sub.some(u=>u.endMonth === month);
    let warn = false;
    if(hasEndMonth){
        // console.log("last month for one of the subject");
        warn = true;
        return res.send({sub,warn});
    }else{
        warn = false;
        return res.send({sub,warn});
    }
    }catch(e){
        res.status(500).send();
    }
})

// router.get('/tasks',auth,async(req,res)=>{
//     console.log("hello");
//     try{
//         await req.user.populate('tasks');
//         console.log(req.user);
//         res.send(req.user.tasks);
//     }catch(e){
//         res.status(500).send();
//     }
// });

// router.get('/tasks/:id',auth, async(req,res)=>{
//     const _id = req.params.id;
//     try{
//         const task = await Task.findOne({_id,owner:req.user._id});
//         if(!task){
//             return res.status(404).send();
//         }
//         res.send(task);
//     }catch(e){
//         res.status(500).send();
//     }
// })



// User.findOne({name: namea, password: passworda}).exec().then((users)=>{
//     res.send(users)
//     // console.log(users)
// })

/////////// WHEN TEACHERS ENTRIES IN DESIGNATION.HTML
router.patch('/subject',auth, async(req,res)=>{
    // console.log(req.body)
    const updates = Object.keys(req.body);
    const allowedUpdates = ['bssd','subject'];
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update));
console.log(updates)
    if(!isValidOperation){
        return res.status(401).send({error: 'Invalid updates!'});
    }
    try{
        const user = await User.findOne({_id: req.user._id})
        // updates.forEach((update)=>{
        //     user[update] = req.body[update];
        // });
        // await user.save();
        console.log(req.body + "here it is")
        const bssd = await user.generateBssd(req.body)
        res.send(bssd);
    }catch(e){
        res.status(400).send(e);
    }
})

router.patch('/subjectplus',auth, async(req,res)=>{

    let registeredYear = new Date().getFullYear();
    req.body.registeredYear = registeredYear ;
    console.log("testing1")
    console.log(req.body)
    console.log("testing2")
    console.log(req.body.registeredYear)

    const updates = Object.keys(req.body);
    console.log(updates);

    let rollFromStu = req.body;
    if((rollFromStu.degree == "null")||(rollFromStu.branch == "null" )||(rollFromStu.semester == "null" )||( rollFromStu.year == "") ||(rollFromStu.roll == "null") || (rollFromStu.roll == '' ) ){
        return res.status(400).send({"error" :"Form incomplete,please fill full form aagain"});
    }
    

    // const allowedUpdates = ['bssd','subject'];let sendData = {
        const allowedUpdates = 
        ['degree',
        'degreeId',
        'branch',
        'semester',
        'year',
        'roll',
        'yearStart',
        'yearEnd',
    'totalYear',
    'registeredYear']
    // }
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update));
// console.log(updates)
    if(!isValidOperation){
        return res.status(401).send({error: 'Invalid updates!'});
    }
    try{
        if(req.user.designation !== 'student'){
            return res.status(401).send({"error" :"unauthorized"});
        }
        const user = await User.findOne({_id: req.user._id})
        // updates.forEach((update)=>{
        //     user[update] = req.body[update];
        // });
        // await user.save();
        // console.log(req.body + "here it is")
        const bssd = await user.generateStuBssd(req.body);
    let redirect= "home.html";
        // res.status(201).send({sub,redirect});
        res.send({bssd,redirect});
    }catch(e){
        res.status(400).send(e);
    }
})

router.patch('/stusubject',auth, async(req,res)=>{
    // console.log(req.body)
    const updates = Object.keys(req.body);
    const allowedUpdates = ['bssd'];
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update));
console.log(updates)
    if(!isValidOperation){
        return res.status(401).send({error: 'Invalid updates!'});
    }
    
    if(req.user.designation !== 'student'){
        return res.status(401).send({"error" :"unauthorized"});
    }
    try{
        const user = await User.findOne({_id: req.user._id})
        // updates.forEach((update)=>{
        //     user[update] = req.body[update];
        // });
        // await user.save();
        // const bssd = await user.generateBssd(req.body)
        
        req.user.bssd = req.body.bssd;
        await req.user.save();
// console.log(req.user.bssd )
        // res.send({'ghghh':'gujkguh'});
        res.send({'done':'ok'});
    }catch(e){
        res.status(400).send(e);
    }
})

// router.delete('/tasks/:id',auth, async(req,res)=>{
//     try{
//         const task = await Task.findOneAndDelete({_id:req.params.id,owner: req.user._id})

//         if(!task){
//             return res.status(404).send();
//         }

//         res.send(task);

//     }catch(e){
//         res.status(500).send();
//     }
// });










// router.get('/studentUsersGet',(req,res)=>{
//     User.find({designation: "student"}).exec().then((users)=>{
//         res.send(users)
//         // console.log(users)
//     }).catch((e)=>{
//         res.status(500).send();
//     })
// })



router.get('/subjectUsersGet',auth, async(req,res)=>{
    try{
        const sub = await Subj.find({}).lean();

        const users = await User.find().lean();

        const userMap = {};
        users.forEach(u=> userMap[u._id] = u.name);

        const taskWithNames = sub.map(sub =>({
            subject: sub.subject,
            name : userMap[sub.author] || 'Unknown'
        }));

        if(!taskWithNames){
            return res.status(404).send();
        }
        res.send(taskWithNames);
    }catch(e){
        res.status(500).send();
    }
})



router.get('/subjectsUsersGet',auth, async(req,res)=>{
    try{
        const results = await
        Subj.aggregate([
            {
                $lookup:{
                    from: 'users',
                    // mongodb collection name(lowercase,plural)
                    localField: 'author',
                    foreignField: '_id',
                    as:'user_info'
                }
            },
            { $unwind: '$user_info'},
            {
                $project:{
                    _id:0,
                    subject:1,
                    name: '$user_info.name'
                }
            }
        ]);
        console.log(results);
        res.send(results);
    }catch(e){
        res.status(500).send();
    }
})
module.exports = router;
