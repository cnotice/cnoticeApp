const express = require ('express');
const User = require('../models/user');
// const User = require('../models/user');
const auth = require('../middleware/auth');
const router = new express.Router();

// router.post('/attendance',(req,res)=>{
//     const attendance = new Attendance(req.body);

//     attendance.save().then(()=>{
//         res.status(201).send(attendance)
//     }).catch((e)=>{
//         res.status(400).send(e);

//     })
// })

router.get('/designation',auth,(req,res)=>{
    res.send(req.user);
    // User.find({}).then((attendance)=>{
    //     res.send(attendance)
    // }).catch((e)=>{
    //     res.status(500).send();
    // })
})

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



router.patch('/designation/:id',auth, async(req,res)=>{
    // console.log(req.body)
    const updates = Object.keys(req.body);
    const allowedUpdates = ['bssd'];
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update));
// console.log(updates)
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'});
    }
    try{
        // const task = await Task.findById(req.params.id);
        const task = await User.findOne({_id: req.params.id,owner:req.user._id})
        // const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!user){
            return res.status(404).send();
        }
        updates.forEach((update)=>{
            user[update] = req.body[update];
        });
        await user.save();
        res.send(user);
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;