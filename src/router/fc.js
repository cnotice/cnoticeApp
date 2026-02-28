const express = require ('express');
const Fc = require('../models/fc');
// 251118
const User = require('../models/user');
// 251118
// 250925
const auth = require('../middleware/auth');
// 250925
// 251206
const Log = require('../models/logs');
// 251206
const router = new express.Router();

// made it a comment on 251006
// router.post('/fc',auth, (req,res)=>{
//     console.log("got till here");
//     // console.log(req.user._id);
//     console.log(req.user);
//     console.log("got till here");
//     const fc = new Fc(req.body);

//     fc.save().then(()=>{
//         res.status(201).send(fc)
//     }).catch((e)=>{
//         res.status(400).send(e);

//     })
// })
// made it a comment on 251006

// 251006 new
router.post('/fc',auth, async(req,res)=>{
    // console.log(req.user.semester);
    try{
    console.log(req.user.studentbssd[0].branch);
    const fc = new Fc({
        ...req.body,
        author: req.user._id,
        branch: req.user.studentbssd[0].branch,
        semester: req.user.studentbssd[0].semester,
        section: req.user.studentbssd[0].section,
        department: req.user.studentbssd[0].department,
        department: req.user.studentbssd[0].degree
    })
  
        // if(req.user.designation !== 'teacher'){
        //     return res.status(401).send({"error" :"unauthorized"});
        // }
        const log = new Log({
          loggerId : "tester",
          date : " today",
          item : "everything"
        })
        await fc.save();
        await log.save();
        res.status(201).send(fc);
    }catch(e){
        res.status(500).send(e);
    }
})
// 251006 new



// 250923
// router.get('/fc',(req,res)=>{
//     Fc.find({}).then((fc)=>{
//         res.send(fc)
//     }).catch((e)=>{
//         res.status(500).send();
//     })
// })
// up or down use any
    // 250925
// router.get('/fc',async (req, res) => {
router.get('/fc', auth,async (req, res) => {
    console.log("req.user._id");
    console.log(req.user._id);
    console.log("req.user._id");
    // 250925
  const statusFilter = req.query.subjectId;  
  // 251118
  // const user = await new User(req.user._id);
    // const user = new User(req.body);
    //     if(search){
    const find = await User.findOne({_id: req.user._id});
    //     if(find){
    // user.recruiterId = find._id;
    // user.recruiterName = find.name;
            console.log("fund");
            // console.log(find.studentbssd[0].branch);
            // console.log(find.name);
            // return res.status(404).send();
        // }
        // 251118
  try {
    // 250923 changes
    const branch = find.studentbssd[0].branch;
    const semester = find.studentbssd[0].semester;
    const degree = find.studentbssd[0].degree;
            console.log(branch);
            console.log(semester);
            console.log(degree);
    const fc = await Fc.find({branch: branch,semester: semester}); //251118
    // const fc = await Fc.find({}); // original 
    // const fc = await Fc.find({ subjectId: "68cfc61ff28c9366393c180a" }); // filter in DB
    // const fc = await Fc.find({ subjectId: statusFilter }); // last with bug 
    // 250923
    res.json(fc);
//         res.send(fc)
  } catch (err) {
    console.error('Error fetching fc:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// 250923




// router.post('/usersGet',(req,res)=>{
//     console.log(req.body);
//     let namea = req.body.name;
//     let passworda = req.body.password;
//     // console.log("ok i have don eit");
//     User.findOne({name: namea, password: passworda}).exec().then((users)=>{
//         res.send(users)
//         console.log(users)
//     }).catch((e)=>{
//         res.status(500).send();
//     })
// })



// 250127

// router.get('/fcquiz',auth, async(req,res)=>{
//     // const _id = req.params.id;
//     try{
//         const sub = await Subj.find({author:req.user._id});
//         if(!sub){
//             return res.status(404).send();
//         }
//         res.send(sub);
//     }catch(e){
//         res.status(500).send();
//     }
// })
// 250127
module.exports = router;