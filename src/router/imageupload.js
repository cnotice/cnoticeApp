// how to upload files with node.js[part 2]- saving file paths to a database by code with bubb
const express = require ('express');
const router = new express.Router();
const multer = require('multer');
// const Image = require('../models/image');
const Image = require('../models/imageupload');
const path = require('path');
// just b4 app=expresss()




//////////////////////////////// interchange with traversy media
// const storage = multer.diskStorage({
//     destination: (req,file,cb)=>{
//         cb(null,'uploads');
//     },
//     filename:(req,file,cb)=>{
//         // let uuid = Math.random()*100;
//         let uuid = Date.now();
//         console.log(uuid);
//         // const {originalname} = file;//5:34 changes
//         // // cb(null,originalname);
//         // cb(null,`${uuid}-${originalname}`);
//         const ext = path.extname(file.originalname);
//         const filePath = `images/${uuid}${ext}`;
//         console.log(uuid);
//         console.log(filePath);
//         Image.create({filePath})
//         .then(()=>{
//             cb(null,filePath);
//         });
//     }
// })

// const upload = multer({
//     storage, 
//     limits: {fileSize : 1024*1024*1}
// });
// router.post('/imageupload', upload.single('avatar'), (req,res)=>{
//                 console.log(req.file);
//     // router.post('/imageupload', upload.array('avatar'), (req,res)=>{
//     // return res.json({status: 'OK', uploaded: req.files.length});
//     // const image = req.files;
//     // const jsonData = JSON.parse(req.body.jsonData);
//     // console.log(image);
//     // console.log(jsonData);
//     return res.redirect('/imageupload.html');
// });
///////////////////////////////////interchange with traversy media
// nodejs image uploading with multer by traversy media// loook ending video


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
// router.post('/imageupload',(req,res)=>{
//     console.log("caught");
//     upload(req,res,(err)=>{
//         if(err){
//             res.render('index',{
//                 msg: err
//             });
//         }else{
//             console.log(req.file);
//             res.send('test');
//         }
//     });
    
//         const ext = path.extname(file.originalname);
        // const filePath = `images/${uuid}${ext}`;
        // console.log(uuid);
        // console.log(filePath);
        // Image.create({filePath})
        // .then(()=>{
        //     cb(null,filePath);
        // });
// })

// from friend
router.post('/imageupload',upload.single('avatar'), async(req,res)=>{
    try{
        const filePath = path.posix.join('images',req.file.filename);
        console.log(req.body.jsonData);
        console.log(req.body);
        
    const jsonData = JSON.parse(req.body.jsonData);
//     // console.log(image);
    console.log(jsonData);
        // const fileExtension = path.extname(req.file.originalname);
        // console.log(fileExtension);
        const image = new Image({
            filePath,
            // extension:fileExtension,
            institute: jsonData.institute,
            degree: jsonData.degree,
            department: jsonData.department,
            semester: jsonData.semester,
            section: jsonData.section,
        });
        await image.save();
        res.status(200).send('file uploaded and path saved to database');
    }catch(error){
        res.status(500).send('Error uploading file');

    }
});
// from friend

// nodejs image uploading with multer by traversy media

router.get('/images', (req,res)=>{
    console.log("ok till")
    Image.find()
    .then((images)=>{
        console.log(images)
        return res.json({status: 'ok', images})
    })
})
module.exports = router;