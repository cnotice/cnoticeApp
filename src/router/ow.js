const express = require ('express');
const Ow = require('../models/ow');
const router = new express.Router();

router.post('/ow',(req,res)=>{
    const ow = new Ow(req.body);

    ow.save().then(()=>{
        res.status(201).send(ow)
    }).catch((e)=>{
        res.status(400).send(e);

    })
})

router.get('/ow',(req,res)=>{
    Ow.find({}).then((ow)=>{
        res.send(ow)
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