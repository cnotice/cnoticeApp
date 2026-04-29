// const express = require('express');
// const router = new express.Router();
// const auth = require('../middleware/auth')
// const Department = require('../models/department');
// const User = require('../models/user');


// /////////DESIGNATION INSTITUE USES 
// router.post('/department', auth, async(req,res)=>{
//     console.log(req.user._id)
//     // const sub = new Subj({
//         const dep = new Department({
//         ...req.body,
//         author: req.user._id
//     })
    
//     if(req.user.designation !== 'institute'){
//         return res.status(401).send({"error" :"unauthorized"});
//     }
//     // dep.save().then(()=>{
//     //     res.status(201).send(dep)
//     // }).catch((e)=>{
//     //     res.status(400).send(e);
//     // })

//     // ////////////////
    
// // console.log("this is a test" + req.user.designation)

// // const sub = new Subj({
// //     ...req.body,
// //     author: req.user._id
// // })

// try{
//     // status(201)
//     await dep.save();
//     res.status(201).send(dep);
// }catch(e){
//     res.status(500).send(e);
// }
// })

// router.get('/department',auth, async(req,res)=>{
//     // const _id = req.params.id;
//         if(req.user.designation !== 'institute'){
//             return res.status(401).send({"error" :"unauthorized"});
//         }
//     try{
//         const dep = await Department.find({author:req.user._id});
//         if(!dep){
//             return res.status(404).send();
//         }
//         res.send(dep);
//     }catch(e){
//         res.status(500).send();
//     }
// })


// module.exports = router;
// all commented on 260420
