const express = require ('express');
const SubjectNotice = require('../models/subjectnotice');
const auth = require('../middleware/auth')
const router = new express.Router();

router.get('/subjectnotice/:id',auth,async(req,res)=>{
    const subjectId = req.params.id;

    try{
        const subjectnotice = await SubjectNotice.find({subjectnotice:subjectId});
        if(!subjectnotice){
            return res.status(404).send();
        }
        res.send(subjectnotice);
    }catch(e){
        res.status(500).send();
    }
})

router.post('/subjectnotice', auth, async(req,res)=>{
    console.log("iam here")

    const subjectnotice = new SubjectNotice({
        ...req.body,
        designation: req.user.designation,
        author: req.user._id
    })
    console.log(req.user.designation)
    try{
        if((req.user.designation === 'teacher' ) || (req.user.designation === 'institute')){
         
        await subjectnotice.save();
        res.status(201).send(subjectnotice);   
        }else{
            return res.status(401).send({"error" :"unauthorized"});
        }
    }catch(e){
        res.status(500).send(e);
    }
})
router.get('/subjectnotice',(req,res)=>{
    // SubjectNotice.find({institute : 'USTM'}).then((subjectnotice)=>{
        SubjectNotice.find({}).then((subjectnotice)=>{
        res.send(subjectnotice)
    }).catch((e)=>{
        res.status(500).send();
    })
})
module.exports = router;