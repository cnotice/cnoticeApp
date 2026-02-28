const express = require ('express');
const Notice = require('../models/notice');
const auth = require('../middleware/auth')
const router = new express.Router();


// 251124
const multer = require('multer');
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
// 251124

// 251124

router.post('/uploadnotice',auth, upload.single('notice'), async(req,res)=>{
    console.log(req.user._id)
    try{
        const filePath = path.posix.join('images',req.file.filename);
        console.log(filePath);
          
    const jsonData = JSON.parse(req.body.jsonData);
    //     // console.log(image);
        console.log(jsonData);
            // const fileExtension = path.extname(req.file.originalname);
            // console.log(fileExtension);
            const image = new Notice({
                // const image = new Image({
                filePath,
                type: "notice",
                institute: jsonData.institute,
                degree: jsonData.degree,
                department: jsonData.department,
                semester: jsonData.semester,
                section: jsonData.section,
                caption: jsonData.caption,
            });
        await image.save();
        res.status(200).send('file uploaded and path saved to database');
    }catch(error){
        res.status(500).send('Error uploading file');

    }
});
// 251124

/////////////////////////////////////240624

router.get('/notice/:id',auth,async(req,res)=>{
    const subjectId = req.params.id;

    try{
        const notice = await Notice.find({subjectnotice:subjectId});
        if(!notice){
            return res.status(404).send();
        }
        res.send(notice);
    }catch(e){
        res.status(500).send();
    }
})
////////////////////////////////////////240624

router.post('/notice', auth, async(req,res)=>{
    console.log("iam here")
    // const notice = new Notice(req.body);

    if(req.user.designation !== 'institute'){
        return res.status(401).send({"error" :"unauthorized"});
    }
    
    const notice = new Notice({
        ...req.body,
        designation: req.user.designation,
        author: req.user._id
    })
//         await req.user.populate('tasks');
//         console.log(req.user);
//         res.send(req.user.tasks);

    // notice.save().then(()=>{
    //     res.status(201).send(notice)
    // }).catch((e)=>{
    //     res.status(400).send(e);

    // })

    console.log(req.user.designation)
    try{
        if((req.user.designation === 'teacher' ) || (req.user.designation === 'institute')){
         
        await notice.save();
        res.status(201).send(notice);   
        }else{
            return res.status(401).send({"error" :"unauthorized"});
        }
    }catch(e){
        res.status(500).send(e);
    }
})

//////////////////////////080724
// uncomment
// router.get('/notice',(req,res)=>{
//     Notice.find({subjectnotice : "65db61a16348033d20b78283"}).then((notice)=>{
//         res.send(notice)
//     }).catch((e)=>{
//         res.status(500).send();
//     })
// })

router.get('/notice',(req,res)=>{
    // Notice.find({institute : 'USTM'}).then((notice)=>{
    Notice.find({}).then((notice)=>{
        res.send(notice)
    }).catch((e)=>{
        res.status(500).send();
    })
})
//////////////////////////080724

/////////////////////////////////////////170924
const Image = require('../models/imageupload');

router.get('/imagesX', (req,res)=>{
    // console.log("ok till")
    Image.find()
    .then((images)=>{
        // console.log(images)
        return res.json({status: 'ok', images})
    })
})


router.get('/getimagenotice', async (req,res)=>{



try{

    const [notices, images] = await Promise.all([
        Notice.find({}),  // Fetch all text entries
        Image.find({type:'notice'})   // Fetch all image entries

        // for sending sorted 
        // Notice.find({}).sort({ _id: -1 }),           // LIFO: newest first
        // Image.find({ type: 'notice' })               // Filter images by type

        // for date{
//   _id: ObjectId("..."),
//   title: "Notice 1",
//   date: new Date("2024-05-01T10:00:00Z")
// }
// const [notices, images] = await Promise.all([
//     Notice.find({}).sort({ date: -1 }),            // Newest date first (LIFO)
//     Image.find({ type: 'notice' }).sort({ date: -1 }) // Optional: sort images too
//   ]);
  

      ]);
    
    //   const data = [notices,images];
      const data = {notices,images};
    //   res.send(notices,images);
      res.send(data);

} catch (error) {
    console.error('Error fetching data:', error);
  }


})

/////////////////////////////////////////170924






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