const express = require ('express');
const User = require('../models/user');
const Notice = require('../models/notice');
const Task = require('../models/task');
const auth = require('../middleware/auth');
const router = new express.Router();

router.get('/functionzusers',async (req,res)=>{

    try{
            const users = await User.find({});
            const tasks = await Task.find({});
                res.send({users,tasks});
            }catch(e){
                res.status(500).send();
            }


    // User.find({}).then((users)=>{
    //     res.send(users)
    // }).catch((e)=>{
    //     res.status(500).send();
    // })
})
router.get('/functionzusersx',async(req,res)=>{
    //   await req.user.populate('tasks');
      await Notice.populate('subjectauthor');
          res.send(Notice.subjectauthor)
    // Notice.find({}).then((notes)=>{
    //     res.send(notes)
    // }).catch((e)=>{
    //     res.status(500).send();
    // })
})
// 660bb89a5e2153542b1da51e
// 660a4a838d2684ae49273f81
router.get('/noticeFun',auth,(req,res)=>{
    // Notice.find({subjectnotice : "660bb89a5e2153542b1da51e"}).then((notice)=>{
    Notice.find({}).then((notice)=>{
        res.send(notice)
    }).catch((e)=>{
        res.status(500).send();
    })
})


// 109,time 17:22
// router.get('/users',auth,async (req,res)=>{
//     try{
//     const users = await User.find({});
//         res.send(users);
//     }catch(e){
//         res.status(500).send();
//     }
// })

router.get('/users/me',auth,async (req,res)=>{
    res.send(req.user);
    // try{
    // const users = await User.find({});
    //     res.send(users);
    // }catch(e){
    //     res.status(500).send();
    // }
})

module.exports = router;