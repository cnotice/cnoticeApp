// test use imageupload.js router
const express = require ('express');
const router = new express.Router();

const multer = require('multer'); //120724
const path = require('path');


///////////////////////////////////////////120724top
// just b4 app=expresss()
// let uuid = Math.random()*100;
let uuid = Date.now();
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'uploads');
    },
    filename:(req,file,cb)=>{
        const {originalname} = file;
        // cb(null,originalname);
        cb(null,`${uuid}-${originalname}`);
    }
})

// const filter = function(req,file,cb){
//     if(file.mimetype.startsWith("image")){
//         cb(null,true)
//     }else{
//         cb(new Error("Not an Image!PLease upload an image"),false)
//     }
// }

// const upload = multer({dest: 'uploads/'});
const upload = multer({storage});
// const upload = multer({
//     storage,
    // limits: {fileSize: 1024 *1024 * 5},
//     fileFilter: filter
// });

///////////////////////////////////////////120724bottom
// just b4 app listing as he said
///////////////////////////////////////////120724topagin2
// single file
// router.post('/upload', upload.single('avatar'), (req,res)=>{
//     return res.json({status: 'OK'});
// });

router.post('/upload', upload.array('avatar'), (req,res)=>{
    return res.json({status: 'OK', uploaded: req.files.length});
});
///////////////////////////////////////////120724bottomagin2

// 130724
// router.post('/upload',upload.single('image'),(req,res)=>{
//     try{
//         res.send('File uploaded successfully!');
//     }catch(err){
//         res.sendStatus(400);
//     }
// });

// router.get('/ProfileImage',(req,res)=>{
//     res.sendFile("/Users...")
// })
// 130724

module.exports = router;