const express = require ('express');
const User = require('../models/user');
const Subject = require('../models/subject');
const auth = require('../middleware/auth');
const router = new express.Router();

// router.post('/users',(req,res)=>{
    router.post('/users',async (req,res)=>{
        console.log(req.body.recruiter)
        const search = req.body.recruiter;
            console.log(search);
    const user = new User(req.body);
        if(search){
    const find = await User.findOne({contactcode: search});
        if(find){
    user.recruiterId = find._id;
    user.recruiterName = find.name;
            console.log("fund");
            console.log(find);
            console.log(find.name);
            // return res.status(404).send();
        }else{
            console.log("nt fund");

        }

        }




    // user.save().then(()=>{
    //     res.status(201).send(user)
    // }).catch((e)=>{
    //     res.status(400).send(e);

    // })
    
    try{
        await user.save()
        const token = await user.generateAuthToken();
        res.status(201).send({user,token})
    }catch(e){
        res.status(400).send(e);

    }
})

router.post('/users/login', async (req,res)=>{
    try{
        // console.log(req.body.name)
        // console.log(req.body.password)
        const user = await User.findByCredentials(req.body.name, req.body.password);
        const token = await user.generateAuthToken()
        res.send({user : user,token})
    }catch(e){
        res.status(400).send();
    }
})

router.post('/users/logout',auth,async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token;
        })
        await req.user.save();

        res.send();
    }catch(e){
        res.status(500).send();
    }
})


router.post('/users/logoutall',auth,async(req,res)=>{
    try{
        req.user.tokens = [];
        await req.user.save();

        res.send();
    }catch(e){
        res.status(500).send();
    }
})


// router.get('/users',(req,res)=>{
//     User.find({}).then((users)=>{
//         res.send(users)
//     }).catch((e)=>{
//         res.status(500).send();
//     })
// })

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

// /users/teacher/bssds
router.get('/users/teacher/bssds',auth,async (req,res)=>{
    // console.log("author");
    // console.log(author)
    // console.log(req.user._id);
            // await Subject.find({author : req.user._id}).then((subs)=>{    
            // await Subject.find({'bssd': req.user.bssd}).then((subs)=>{    
                await req.user.populate('subjects').then((subs)=>{    
                    // console.log(subs);


        //             const user = await User.findById('65db5cadce81e08c39c7d302') ;
        //             await user.populate('subjects')
        // res.send(user.subjects)


        res.send(req.user.subjects)
    }).catch((e)=>{
        res.status(500).send();
    })
})

///////////////////////////////
router.get('/users/bssds',auth,async (req,res)=>{
    // res.send(req.user);
    // User.find({bssd : 'test'})
    
    // await User.find({'bssds.bssd' :'xxx','bssds.subject' : 'science'}).exec().then((users)=>{
    // await User.findOne({$and:[{'bssds.bssd' :'hun','bssds.subject' : 'science'}]}).exec().then((users)=>{
        // await User.find({'bssds' :{ $elemMatch:{ 'bssd': 'xxx','subject' : 'science'}}}).exec().then((users)=>{
        // await User.find({'bssds' :{ $elemMatch:{ 'bssd': 'xxx'}}}).exec().then((users)=>{   
        await Subject.find({'bssd': req.user.bssd}).then((subs)=>{    
        res.send(subs)
        // console.log(users)
    }).catch((e)=>{
        res.status(500).send();
    })
    // try{
    // const users = await User.find({});
    //     res.send(users);
    // }catch(e){
    //     res.status(500).send();
    // }
})

router.post('/usersGet',(req,res)=>{
    // console.log(req.body);
    let namea = req.body.name;
    let passworda = req.body.password;
    // console.log("ok i have don eit");
    User.findOne({name: namea, password: passworda}).exec().then((users)=>{
        res.send(users)
        // console.log(users)
    }).catch((e)=>{
        res.status(500).send();
    })
})


router.get('/users/:id',(req,res)=>{
    const _id = req.params.id;


    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send();
        }
        res.send(user)
    }).catch((e)=>{
        res.status(500).send();
    })
})

router.patch('/users/profile',auth, async(req,res)=>{
    
    const updates = Object.keys(req.body);
    
    const allowedUpdates = ['name', 'designation', 'password', 'age']
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update));
    
    if(!isValidOperation){
        return res.status(400).send({error:'Invalid updates!'});
    }
    try{
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        // console.log(user)
        // if(!user){
        //     return res.status(404).send();
        // }
        updates.forEach((update)=>{
            req.user[update] = req.body[update];
        })
        await req.user.save();
        res.send(req.user)
    } catch(e){
        res.status(400).send(e);
    }
})

router.delete('/users/profile',auth,async(req,res)=>{
    try{
        // const user = await User.findByIdAndDelete(req.params.id);

        // if(!user){
        //     return res.status(404).send();
        // }
        // console.log(req.user);
        await req.user.remove();
        res.send(req.user);
    }catch(e){
        res.status(500).send();
    }
})



router.get('/teacherUsersGet',(req,res)=>{
    // console.log(req.body);
    // console.log("ok i have don eit");
    User.find({designation: "teacher"}).exec().then((users)=>{
        res.send(users)
        // console.log(users)
    }).catch((e)=>{
        res.status(500).send();
    })
})



router.get('/studentUsersGet',(req,res)=>{
    User.find({designation: "student"}).exec().then((users)=>{
        res.send(users)
        // console.log(users)
    }).catch((e)=>{
        res.status(500).send();
    })
})


module.exports = router;