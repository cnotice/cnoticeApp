const express = require ('express');
const Log = require('../models/logs');
const router = new express.Router();

// router.post('/logs',(req,res)=>{
//     const logs = new Log(req.body);

//     logs.save().then(()=>{
//         res.status(201).send(logs)
//     }).catch((e)=>{
//         res.status(400).send(e);

//     })
// })

router.get('/logs',(req,res)=>{
    Log.find({}).then((logs)=>{
        res.send(logs)
    }).catch((e)=>{
        res.status(500).send();
    })
})

module.exports = router;