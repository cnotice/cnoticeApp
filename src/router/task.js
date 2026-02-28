const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth')
const Task = require('../models/task');



router.get('/task',(req,res)=>{
    res.render('task',{
        title: 'tasks',
        message: 'you are a fucker',
        name: 'Partha Barbi'
    });
});
router.post('/tasks', auth, (req,res)=>{
    // res.send('tesjjting!')
    // const task = new Task(req.body);
    // console.log("ok here till")
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    // console.log(task)
    task.save().then(()=>{
        res.status(201).send(task)
    }).catch((e)=>{
        res.status(400).send(e);
        // res.send(e);
    })
})
router.get('/task',(req,res)=>{
    res.render('task',{
        title: 'tasks',
        message: 'you are a fucker',
        name: 'Partha Barbi'
    });
});

router.get('/tasks',auth,async(req,res)=>{

    console.log("hello");
    // console.log(req.user);
    try{
        // const tasks = await Task.find({owner: req.user._id})
        // res.send(tasks)
        // OR
        // console.log(req.user);
        await req.user.populate('tasks');
        console.log(req.user);
        res.send(req.user.tasks);
    }catch(e){
        res.status(500).send();
    }
    // Task.find({}).then((users)=>{
    //     res.send(users);
    // }).catch((e)=>{
    //     res.status(500).send();
    // })
});

router.get('/tasks/:id',auth, async(req,res)=>{
    const _id = req.params.id;
// console.log(_id)
    // Task.findById(_id).then((user)=>{
    //     if(!user){
    //         return res.status(404).send();
    //     }

    //     res.send(user);
    // }).catch((e)=>{
    //     res.status(500).send();
    // })

    try{
        const task = await Task.findOne({_id,owner:req.user._id});
        if(!task){
            return res.status(404).send();
        }
        res.send(task);
    }catch(e){
        res.status(500).send();
    }
})


router.patch('/tasks/:id',auth, async(req,res)=>{
    // console.log(req.body)
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description','completed'];
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update));
console.log(updates)
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'});
    }
    try{
        // const task = await Task.findById(req.params.id);
        const task = await Task.findOne({_id: req.params.id,owner:req.user._id})
        console.log(req.params.id)
        console.log(req.user._id)
        console.log("Hard coded")
        // const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!task){
            return res.status(404).send();
        }
        updates.forEach((update)=>{
            task[update] = req.body[update];
        });
        await task.save();
        res.send(task);
    }catch(e){
        res.status(400).send(e);
    }
})

// router.delete('/users/:id', async(req,res)=>{
//     try{
//         const user = await User.findByIdAndDelete(req.params.id);

//         if(!user){
//             return res.status(404).send();
//         }

//         res.send(user);

//     }catch(e){
//         res.status(500).send();
//     }
// });


router.delete('/tasks/:id',auth, async(req,res)=>{
    try{
        const task = await Task.findOneAndDelete({_id:req.params.id,owner: req.user._id})

        if(!task){
            return res.status(404).send();
        }

        res.send(task);

    }catch(e){
        res.status(500).send();
    }
});

module.exports = router;

// app.get('/users',(req,res)=>{

//     User.find({}).then((users)=>{
//         res.send(users)

//     }).catch((e)=>{
//         res.status(500).send()
//     )}
// }



// const express = require ('express');
// const Task = require('../models/task');
// const auth = require('../middleware/auth');
// const router = new express.Router();

// router.post('/tasks',auth, (req,res)=>{
//     // const task = new Task(req.body);
//     const task = new Task({
//         ...req.body,
//         owner : req.user._id
//     })

//     task.save().then(()=>{
//         res.status(201).send(task)
//     }).catch((e)=>{
//         res.status(400).send(e);

//     })
// })
// router.get('/tasks',(req,res)=>{
//     Task.find({}).then((tasks)=>{
//         res.send(tasks)
//     }).catch((e)=>{
//         res.status(500).send();
//     })
// })


// router.get('/tasks/:id',(req,res)=>{
//     const _id = req.params.id;


//     Task.findById(_id).then((task)=>{
//         if(!task){
//             return res.status(404).send();
//         }
//         res.send(task)
//     }).catch((e)=>{
//         res.status(500).send();
//     })
// })

// router.patch('/tasks/:id', async(req,res)=>{
//     const updates = Object.keys(req.body);
//     const allowedUpdates = ['description', 'completed']
//     const isValidOperation = updates.every((update)=> allowedUpdates.includes(update));
//     if(!isValidOperation){
//         return res.status(400).send({error:'Invalid updates!'});
//     }
//     try{
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
//         if(!task){
//             return res.status(404).send();
//         }
//         res.send(task)
//     } catch(e){
//         res.status(400).send(e);
//     }
// })

// router.delete('/tasks/:id',async(req,res)=>{
//     try{
//         const task = await Task.findByIdAndDelete(req.params.id);

//         if(!task){
//             return res.status(404).send();
//         }
//         res.send(task);
//     }catch(e){
//         res.status(500).send();
//     }
// })

// module.exports = router;