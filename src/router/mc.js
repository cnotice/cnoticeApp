const express = require ('express');
const Mc = require('../models/mc');
const router = new express.Router();

router.post('/mc',(req,res)=>{
    console.log("got here")
    const mc = new Mc(req.body);

    mc.save().then(()=>{
        res.status(201).send(mc)
    }).catch((e)=>{
        res.status(400).send(e);

    })
})

router.get('/mc',(req,res)=>{
    Mc.find({}).then((mc)=>{
        res.send(mc)
    }).catch((e)=>{
        res.status(500).send();
    })
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

module.exports = router;