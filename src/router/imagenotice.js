// how to upload files with node.js[part 2]- saving file paths to a database by code with bubb
const express = require ('express');
const router = new express.Router();
const auth = require('../middleware/auth');
const multer = require('multer');
// const Image = require('../models/image');
const Image = require('../models/imageupload');
const path = require('path');

const storage = multer.diskStorage({
    destination: 'uploads/images',
    filename:function(req,file,cb){
        cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
        
    }
});

const upload = multer({
    storage, 
    limits: {fileSize : 1024*1024*1},
    fileFilter : function(req,file,cb){
        checkFileType(file,cb);
    }
// }).single('avatar');
});

function checkFileType(file,cb){
    // allowed ext
    const filetypes = /jpeg|jpg|png/;
// check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    const mimetype = filetypes.test(file.mimetype);

    if(mimetype&& extname){
        return cb(null,true);
    }else{
        cb('Error: Images only!');
    }
}
router.post('/uploadnotice',upload.single('notice'), async(req,res)=>{
    // router.post('/imageuploadnotice',upload.single('aaaa'), async(req,res)=>{
    try{
        const filePath = path.posix.join('images',req.file.filename);
        console.log(filePath);
        const image = new Image({
            filePath,
            // extension:fileExtension,
                caption: jsonData.caption,
        });
        await image.save();
        res.status(200).send('file uploaded and path saved to database');
    }catch(error){
        res.status(500).send('Error uploading file');

    }
});


router.post('/uploadtimetable',upload.single('timetable'), async(req,res)=>{
    try{
        const filePath = path.posix.join('images',req.file.filename);
        console.log(filePath);
          
    const jsonData = JSON.parse(req.body.jsonData);
    //     // console.log(image);
        // console.log(jsonData);
            // const fileExtension = path.extname(req.file.originalname);
            // console.log(fileExtension);
            const image = new Image({
                filePath,
                type: "timetable",
                institute: "Regional Institute Of Science And Technology",
                degree: jsonData.degree,
                department: jsonData.department,
                semester: jsonData.semester,
                subject: jsonData.subject,
                caption: jsonData.caption,
            });
        await image.save();
        res.status(200).send('file uploaded and path saved to database');
    }catch(error){
        res.status(500).send('Error uploading file');

    }
});
router.post('/uploadcalendar',upload.single('calendar'), async(req,res)=>{
    const jsonData = JSON.parse(req.body.jsonData);
    try{
        const filePath = path.posix.join('images',req.file.filename);
        console.log(filePath);
        const image = new Image({
            filePath,
                institute: "Regional Institute Of Science And Technology",
                caption: jsonData.caption,
            type: "calendar",
            // degree : "engineering",
            // department : "cse",
            // semester : "8",
            // section : "b",
            // extension:fileExtension,
        });
        await image.save();
        res.status(200).send('file uploaded and path saved to database');
    }catch(error){
        res.status(500).send('Error uploading file');

    }
});


router.post('/uploadqp',auth, upload.single('qp'), async(req,res)=>{
    console.log(req.user._id)
    try{
        const filePath = path.posix.join('images',req.file.filename);
        console.log(filePath);
          
    const jsonData = JSON.parse(req.body.jsonData);
    //     // console.log(image);
        console.log(jsonData);
            // const fileExtension = path.extname(req.file.originalname);
            // console.log(fileExtension);
            const image = new Image({
                filePath,
                type: "qp",
                institute: "Regional Institute Of Science And Technology",
                degree: jsonData.degree,
                department: jsonData.department,
                semester: jsonData.semester,
                subject: jsonData.subject,
                caption: jsonData.caption,
                author : req.user._id,
            });
        await image.save();
        res.status(200).send('file uploaded and path saved to database');
    }catch(error){
        res.status(500).send('Error uploading file');

    }
});



router.post('/uploadsyllabus',upload.single('syllabus'), async(req,res)=>{
    try{
        const filePath = path.posix.join('images',req.file.filename);
        console.log(filePath);
          
    const jsonData = JSON.parse(req.body.jsonData);
    //     // console.log(image);
        console.log(jsonData);
            // const fileExtension = path.extname(req.file.originalname);
            // console.log(fileExtension);
            const image = new Image({
                filePath,
                type: "syllabus",
                institute: "Regional Institute Of Science And Technology",
                degree: jsonData.degree,
                department: jsonData.department,
                semester: jsonData.semester,
                subject: jsonData.subject,
                caption: jsonData.caption,
            });
            console.log("image.caption");
            console.log(image.caption)
        await image.save();
        res.status(200).send('file uploaded and path saved to database');
    }catch(error){
        res.status(500).send('Error uploading file');

    }
});
router.get('/getnotice', (req,res)=>{
    // console.log("ok till")
    Image.find({type:'notice'})
    .then((images)=>{
        // console.log(images)
        return res.json({status: 'ok', images})
    })
})


router.get('/getqp', (req,res)=>{
    // console.log("ok till")
    Image.find({type:'qp'})
    .then((images)=>{
        // console.log(images)
        return res.json({status: 'ok', images})
    })
})


router.get('/gettimetable', (req,res)=>{
    // console.log("ok till")
    Image.find({type:'timetable'})
    .then((images)=>{
        // console.log(images)
        return res.json({status: 'ok', images})
    })
})


router.get('/getcalendar', (req,res)=>{
    // console.log("ok till")
    Image.find({type:'calendar'})
    .then((images)=>{
        // console.log(images)
        return res.json({status: 'ok', images})
    })
})


router.get('/getsyllabus', (req,res)=>{
    // console.log("ok till")
    Image.find({type:'syllabus'})
    .then((images)=>{
        // console.log(images)
        return res.json({status: 'ok', images})
    })
})
module.exports = router;