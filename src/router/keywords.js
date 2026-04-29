const express = require ('express');
const Keywords = require('../models/keywords');
const router = new express.Router();
const auth = require('../middleware/auth')



        // let datas = new Date();
        // console.log(datas);

        function normalizeDate(date){
            return new Date(date.setHours(0,0,0,0));
        }
        
        // console.log(normalizeDate(new Date()));
        // console.log(normalizeDate(new Date('2026-04-05')));


router.post('/keywords',auth,async(req,res)=>{
    console.log("req.user.designation")
    // console.log(req.user.designation)
    if(req.user.designation !== 'teacher'){
        return res.status(401).send({"error" :"unauthorized"});
    }
    const keywords = new Keywords({
        ...req.body,
    // keywords: [{keyword : req.body.keyword, date: 'static'}]
    keywords: [{keyword : req.body.keyword, date: normalizeDate(new Date())}]
});
console.log(req.body.keyword + 'this');

// const task = new Task({
//     ...req.body,
//     owner: req.user._id
// })

// ////////////////////////////////////////
    // Keywords.create(keywords).then(()=>{
    //     // console.log('doc created', created)
    //     res.status(201).send(keywords)
    // }).catch((e)=>{
    //     res.status(400).send(e);

    // })
// ////////////////////////////////////////
    try{
    
        // // const existingDocument = 1;
        // await Keywords.findOne({
        //     keywords : {
        //         $elemMatch : {
        //             keyword : 'xxx',
        //         }
        //     }
        // })

////////////////////////////
        const existingDocument = await Keywords.findOne({
            subjectId : req.body.subjectId
        })
        /////////////////////
// 
        // console.log(existingDocument)
// const update = { author : 'nnn'}
// const update = {keywords: [{keyword : req.body.keyword, date: 'staticUpdated'}]};
// commented on 260409 i think update is of no use
// const update = {keywords: [{keyword : req.body.keyword, date: normalizeDate(new Date())}]};
// commented on 260409 i think update is of no use
        if(existingDocument){
            /////////////////////1111111111111111
            // await Keywords.updateOne({
            //     // // author : 'update'
            //     // Keywords : {
            //     //     $elemMatch : {
            //     //         keyword :  req.body.keyword,
            //     //     },
            //     // },
            //     subjectkeywords : req.body.subjectkeywords
            // },{$set : update});
            // // res.status(201).send(Keywords)
        
            ///////////////////////////2222222222
            // await Keywords.updateOne({
            //     subjectkeywords : req.body.subjectkeywords
            // },{$set : update});
        ///////////////////////////
        // user.tokens = user.tokens.concat({token})
//    const update2 = await existingDocument.keywords.concat({keyword : req.body.keyword})     
console.log("trying to do this part1");
console.log(req.body.keyword);
console.log(existingDocument);
console.log("trying to do this part2");
// console.log(keywords);
console.log(existingDocument.keywords);


// existingDocument.keywords = existingDocument.keywords.concat({keyword : req.body.keyword, date: 'Newstatic'}) 
existingDocument.keywords = existingDocument.keywords.concat({keyword : req.body.keyword, date: normalizeDate(new Date())}) 


console.log("trying to do this part");
console.log(keywords);
console.log(keywords.keyword + " found");   
console.log("trying to do this xxx"); 
await existingDocument.save();
    
    return existingDocument;
        }else{
            await Keywords.create(keywords);
            res.status(201).send(keywords)
        }
        
        
    }catch(e){
        res.status(400).send(e);
    }
})

router.get('/keywords/:id',auth,async(req,res)=>{
    const subjectId = req.params.id;

    try{
        // best for studest
        // const keywords = await Keywords.find({subjectId:subjectId});
        // best for teachers
        const keywords = await Keywords.find({subjectAuthor:subjectId});
        // const keywords = await Keywords.find({subjectkeywords:subjectId});
        if(!keywords){
            return res.status(404).send();
        }
        res.send(keywords);
    }catch(e){
        res.status(500).send();
    }
})

router.get('/keywords',(req,res)=>{
    console.log("hello")
    Keywords.find({}).then((kw)=>{
        console.log(kw)
        res.send(kw)
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