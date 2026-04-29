// const express = require('express');
// const router = new express.Router();
// const auth = require('../middleware/auth')
// const Subj = require('../models/subject');
// const User = require('../models/user');


// ///////SUBJECT WAS USED BY INSTITUTE IN DESIGNATION NOW DEPARTMENT IS USED MAY BE
// //////// bUT NOW IS USED BY STUDENT IN DESIGNATION
// router.post('/subject', auth, async(req,res)=>{
// // console.log("this is a test" + req.user.designation)

//     const sub = new Subj({
//         ...req.body,
//         author: req.user._id
//     })

//     // sub.save().then(()=>{
//     //     res.status(201).send(sub)
//     // }).catch((e)=>{
//     //     res.status(400).send(e);
//     // })
//   ////////////////////////////////////////  // 
  
//     try{
//         if(req.user.designation !== 'teacher'){
//             return res.status(401).send({"error" :"unauthorized"});
//         }
//         // status(201)
//         await sub.save();
//         res.status(201).send(sub);
//     }catch(e){
//         res.status(500).send(e);
//     }
//     // //////////////////////
// })

// router.get('/subject',auth, async(req,res)=>{
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

// router.get('/stusubjectTest',auth, async(req,res)=>{
//     // const _id = req.params.id;
//     try{
//         // const sub = await Subj.find({bssd:req.user.bssd});
//         const sub = await Subj.find({branch:req.user.studentbssd[0].branch});
//         // const sub = await Subj.find({});
//         console.log("start");
//         console.log(req.user.studentbssd[0].branch);
//         console.log("finish");
//         if(!sub){
//             return res.status(404).send();
//         }
//         res.send(sub);
//     }catch(e){
//         res.status(500).send();
//     }
// })

// // router.get('/tasks',auth,async(req,res)=>{
// //     console.log("hello");
// //     try{
// //         await req.user.populate('tasks');
// //         console.log(req.user);
// //         res.send(req.user.tasks);
// //     }catch(e){
// //         res.status(500).send();
// //     }
// // });

// // router.get('/tasks/:id',auth, async(req,res)=>{
// //     const _id = req.params.id;
// //     try{
// //         const task = await Task.findOne({_id,owner:req.user._id});
// //         if(!task){
// //             return res.status(404).send();
// //         }
// //         res.send(task);
// //     }catch(e){
// //         res.status(500).send();
// //     }
// // })



// // User.findOne({name: namea, password: passworda}).exec().then((users)=>{
// //     res.send(users)
// //     // console.log(users)
// // })

// /////////// WHEN TEACHERS ENTRIES IN DESIGNATION.HTML
// router.patch('/subject',auth, async(req,res)=>{
//     // console.log(req.body)
//     const updates = Object.keys(req.body);
//     const allowedUpdates = ['bssd','subject'];
//     const isValidOperation = updates.every((update)=> allowedUpdates.includes(update));
// // console.log(updates)
//     if(!isValidOperation){
//         return res.status(401).send({error: 'Invalid updates!'});
//     }
//     try{
//         const user = await User.findOne({_id: req.user._id})
//         // updates.forEach((update)=>{
//         //     user[update] = req.body[update];
//         // });
//         // await user.save();
//         // console.log(req.body + "here it is")
//         const bssd = await user.generateBssd(req.body)
//         res.send(bssd);
//     }catch(e){
//         res.status(400).send(e);
//     }
// })

// router.patch('/subjectplus',auth, async(req,res)=>{
//     // console.log(req.body)
//     const updates = Object.keys(req.body);
//     // const allowedUpdates = ['bssd','subject'];let sendData = {
//         const allowedUpdates = 
//         ['degree',
//         'branch',
//         'semester',
//         'year',
//         'roll']
//     // }
//     const isValidOperation = updates.every((update)=> allowedUpdates.includes(update));
// // console.log(updates)
//     if(!isValidOperation){
//         return res.status(401).send({error: 'Invalid updates!'});
//     }
//     try{
//         if(req.user.designation !== 'student'){
//             return res.status(401).send({"error" :"unauthorized"});
//         }
//         const user = await User.findOne({_id: req.user._id})
//         // updates.forEach((update)=>{
//         //     user[update] = req.body[update];
//         // });
//         // await user.save();
//         // console.log(req.body + "here it is")
//         const bssd = await user.generateStuBssd(req.body)
//         res.send(bssd);
//     }catch(e){
//         res.status(400).send(e);
//     }
// })

// router.patch('/stusubject',auth, async(req,res)=>{
//     // console.log(req.body)
//     const updates = Object.keys(req.body);
//     const allowedUpdates = ['bssd'];
//     const isValidOperation = updates.every((update)=> allowedUpdates.includes(update));
// // console.log(updates)
//     if(!isValidOperation){
//         return res.status(401).send({error: 'Invalid updates!'});
//     }
    
//     if(req.user.designation !== 'student'){
//         return res.status(401).send({"error" :"unauthorized"});
//     }
//     try{
//         const user = await User.findOne({_id: req.user._id})
//         // updates.forEach((update)=>{
//         //     user[update] = req.body[update];
//         // });
//         // await user.save();
//         // const bssd = await user.generateBssd(req.body)
        
//         req.user.bssd = req.body.bssd;
//         await req.user.save();
// // console.log(req.user.bssd )
//         // res.send({'ghghh':'gujkguh'});
//         res.send({'done':'ok'});
//     }catch(e){
//         res.status(400).send(e);
//     }
// })

// // router.delete('/tasks/:id',auth, async(req,res)=>{
// //     try{
// //         const task = await Task.findOneAndDelete({_id:req.params.id,owner: req.user._id})

// //         if(!task){
// //             return res.status(404).send();
// //         }

// //         res.send(task);

// //     }catch(e){
// //         res.status(500).send();
// //     }
// // });

// module.exports = router;
// allcommented on 260420
