const express = require ('express');
const User = require('../models/user');
const Subject = require('../models/subject');
const Degree = require('../models/degree');
const auth = require('../middleware/auth');
const router = new express.Router();

// // router.post('/users',(req,res)=>{
    router.post('/users',async (req,res)=>{

        console.log("hello")
    try{


        

        // console.log(req.body.recruiter)
        const search = req.body.recruiter;
            console.log(search);
    const user = new User(req.body);

        if(search){



    const find = await User.findOne({contactcode: search});
        if(find){
    user.recruiterId = find._id;
    user.recruiterName = find.name;
    user.instituteId = find.instituteId;
     let designation2 = find.designation;


    // user.save().then(()=>{
    //     res.status(201).send(user)
    // }).catch((e)=>{
    //     res.status(400).send(e);

    // })
    
        let redirect = "";
        if(user.designation =="institute"){
            if(designation2 !== "admin"){
                return;
            }

            redirect = "ifp.html";
        

        await user.save()
        const token = await user.generateAuthToken();
        res.status(201).send({user,token,redirect})
        }else if(user.designation == "teacher"){
            if(designation2 !== "institute"){
                return;
            }

            
            redirect = "tfps.html";
        
        await user.save()
        const token = await user.generateAuthToken();
        res.status(201).send({user,token,redirect})

        }else if(user.designation == "student"){
            if(designation2 !== "teacher"){
                return;
            }

            redirect = "sfp.html";
        
        await user.save()
        const token = await user.generateAuthToken();
        res.status(201).send({user,token,redirect})

        }else{
            redirect = "notfound.html";
            console.log("nt fund");
        res.status(201).send({user,token,redirect})

        }

        // }else if(user.designation == "admin"){
    }else{


    let user = new User(req.body);
        if(user.designation =="admin"){
        
        await user.save()
        const token = await user.generateAuthToken();
        res.status(201).send({user,token,redirect})
        }
    }
        }
    }catch(e){
        res.status(400).send(e);

    }
})


    // router.post('/users',async (req,res)=>{
    //     console.log("hello");

    // try{
    //     const search = req.body.recruiter;
    //     if(search){
    // const find = await User.findOne({contactcode: search});
    //   if(find){
    // const user = new User(req.body);
    // user.recruiterId = find._id;
    // user.recruiterName = find.name;
    //  let designation2 = find.designation;
    //     let redirect = "";

    //     if(user.designation =="institute"){
    //         if(designation2 !== "admin"){
    //             return;
    //         }
    //         redirect = "ifp.html";
    //     await user.save()
    //     const token = await user.generateAuthToken();
    //     res.status(201).send({user,token,redirect})
    //     }else if(user.designation == "teacher"){
    //         if(designation2 !== "institute"){
    //             return;
    //         }
    //         redirect = "tfps.html";
    //     await user.save()
    //     const token = await user.generateAuthToken();
    //     res.status(201).send({user,token,redirect})
    //     }else if(user.designation == "student"){
    //         if(designation2 !== "teacher"){
    //             return;
    //         }
    //         redirect = "sfp.html";
    //     await user.save()
    //     const token = await user.generateAuthToken();
    //     res.status(201).send({user,token,redirect})
    //     }else{
    //     //     redirect = "notfound.html";
    //     //     console.log("nt fund");
    //     // res.status(201).send({user,token,redirect})
    //     }
    
        
    // }catch(e){
    //     res.status(400).send(e);
    // }
    // })

//     router.post('/usersx',async (req,res)=>{
//         console.log("hello")
//     // try{
//     //     const search = req.body.recruiter;
//             console.log(search);
//     // const user = new User(req.body);
//     //     if(search){
//     // const find = await User.findOne({contactcode: search});
//     //     if(find){
//     // user.recruiterId = find._id;
//     // user.recruiterName = find.name;
//     //  let designation2 = find.designation;
//     //     let redirect = "";

//         // if(user.designation =="institute"){
//         //     if(designation2 !== "admin"){
//         //         return;
//         //     }
//         //     redirect = "ifp.html";
//         // await user.save()
//         // const token = await user.generateAuthToken();
//         // res.status(201).send({user,token,redirect})
//         // }else if(user.designation == "teacher"){
//         //     if(designation2 !== "institute"){
//         //         return;
//         //     }
//         //     redirect = "tfps.html";
//         // await user.save()
//         // const token = await user.generateAuthToken();
//         // res.status(201).send({user,token,redirect})
//         // }else if(user.designation == "student"){
//         //     if(designation2 !== "teacher"){
//         //         return;
//         //     }
//         //     redirect = "sfp.html";
//         // await user.save()
//         // const token = await user.generateAuthToken();
//         // res.status(201).send({user,token,redirect})
//         // }else{
//         // //     redirect = "notfound.html";
//         // //     console.log("nt fund");
//         // // res.status(201).send({user,token,redirect})
//         // }
        
    
//     }else if(user.designation == "admin"){
//         await user.save()
//         const token = await user.generateAuthToken();
//         res.status(201).send({user,token,redirect})
//         }
//         }

//     // }catch(e){
//     //     res.status(400).send(e);
//     // }
// })

router.post('/users/login', async (req,res)=>{
    try{
        // console.log(req.body.name)
        // console.log(req.body.password)
        const user = await User.findByCredentials(req.body.name, req.body.password);
        let redirect = "";
        if(user.designation =="institute"){
        let exist = await Degree.exists({author:user._id});
        if(exist){

            redirect = "dashboard.html";
        }else{
            
            redirect = "ifp.html";
        }

        }else if(user.designation == "teacher"){
        let exist = await Subject.exists({author:user._id});
        if(exist){

            redirect = "hub.html";
        }else{
            
            redirect = "tfps.html";
        }

        }else if(user.designation == "student"){
        if(user.studentbssd && user.studentbssd.length > 0){
            console.log("existing student bssd");
            redirect = "home.html";
        }else{
            redirect = "sfp.html";
        }

        }else{

        }
        // // stu
        // if(user.studentbssd && user.studentbssd.length > 0){
        //     console.log("existing student bssd");
        // }
            // console.log(user);
            // tea ins
        // const exist = await Degree.exists({author:userId});
        // if(exist){

        // }

        const token = await user.generateAuthToken()
        res.send({user : user,token, redirect})
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
    
    const allowedUpdates = ['name', 'designation', 'password', 'age', 'contactcode']
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
        const user = await User.findByIdAndDelete(req.user._id);
        // const user = await User.findByIdAndDelete(req.params.id);

        if(!user){
            return res.status(404).send();
        }
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