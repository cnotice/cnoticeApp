const express = require ('express');
const Sa = require('../models/sa');
const router = new express.Router();

router.post('/sa',(req,res)=>{
    const sa = new Sa(req.body);

    sa.save().then(()=>{
        res.status(201).send(sa)
    }).catch((e)=>{
        res.status(400).send(e);

    })
})

router.get('/sa',(req,res)=>{
    Sa.find({}).then((sa)=>{
        res.send(sa)
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