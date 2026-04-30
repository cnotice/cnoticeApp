require('dotenv').config();
const path = require ('path');
const express = require ('express');
// const multer = require('multer'); //120724
require('./db/mongoose');
const imageRouter = require('./router/image');//120724 second phase
const imageuploadRouter = require('./router/imageupload');//160724 second phase
const imagenoticeRouter = require('./router/imagenotice');//130824
const userRouter = require('./router/user');
// const taskRouter = require('./router/task');
const keysRouter = require('./router/keywords');
const fcRouter = require('./router/fc');
const owRouter = require('./router/ow');
const mcRouter = require('./router/mc');
const saRouter = require('./router/sa');
const noticeRouter = require('./router/notice');
const SubjectNoticeRouter = require('./router/subjectnotice');
const attRouter = require('./router/attendance');
const desigRouter = require('./router/designation');
// const deptRouter = require('./router/department');
const degreeRouter = require('./router/degree');
const instituteRouter = require('./router/institute');
const subRouter = require('./router/sub');
// const testRouter = require('./router/test');
const funRouter = require('./router/functionz');
const logsRouter = require('./router/logs');

// ///////////////////////////////////////////120724top1
// // just b4 app=expresss()
//     let uuid = Math.random()*100;
// const storage = multer.diskStorage({
//     destination: (req,file,cb)=>{
//         cb(null,'uploads');
//     },
//     filename:(req,file,cb)=>{
//         const {originalname} = file;
//         // cb(null,originalname);
//         cb(null,`${uuid}-${originalname}`);
//     }
// })
// // const upload = multer({dest: 'uploads/'});
// const upload = multer({storage});

// ///////////////////////////////////////////120724bottom1
const app = express();
const port = process.env.PORT || 5000 ;


// app.use((req,res,next)=>{
    // 1
    // console.log(req.method,req.path)
    // next();
    // 2
    // if(req.method === 'GET'){
    //     res.send('GET requests are disabled');
    // }else{
    //     next();
    // }
    // 3
//     res.status('503').send('Server in maintanance');
// })


app.use(express.json());
app.use(userRouter);
// app.use(taskRouter);
app.use(keysRouter);
app.use(fcRouter);
app.use(owRouter);
app.use(mcRouter);
app.use(saRouter);
app.use(noticeRouter);
app.use(SubjectNoticeRouter);
app.use(attRouter);
app.use(desigRouter);
// app.use(deptRouter);
app.use(degreeRouter);
app.use(instituteRouter);
app.use(subRouter);
// app.use(testRouter);
app.use(funRouter);
app.use(logsRouter);
app.use(imageRouter);//120724 second phase
app.use(imageuploadRouter);//160724 second phase
app.use(imagenoticeRouter);//130824


// // just b4 app listing as he said
// ///////////////////////////////////////////120724topagin2
// // single file
// app.post('/upload', upload.single('avatar'), (req,res)=>{
//     return res.json({status: 'OK'});
// });

// // app.post('/upload', upload.array('avatar'), (req,res)=>{
// //     return res.json({status: 'OK', uploaded: req.files.length});
// // });
// ///////////////////////////////////////////120724bottomagin2

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

// const imageDirectoryPath = path.join(__dirname, '../uploads/images');
// app.use(express.static(imageDirectoryPath));

const imageDirectoryPath = path.join(__dirname, '../uploads');
app.use(express.static(imageDirectoryPath));




// app.listen(port, ()=>{
//     // console.log('Server is up on port' + port) //before reset password code
//     console.log('@http://localhost:5000') //reset password code
// })

// const jwt = require('jsonwebtoken');
// // const bcrypt = require('bcrypt');   
// const myFunction = async()=>{
//     // const token = jwt.sign({_id: 'abc'}, 'thisissecret')
//     const token = jwt.sign({_id: 'abc'}, 'thisissecret',{expiresIn:'10 seconds'})
//     console.log("token : " + token);
//     const data = jwt.verify(token, 'thisissecret');
//     console.log(data);
//     // const password = 'red12345';
//     // const hashedPassword = await bcrypt.hash(password,8);

//     // console.log(password);
//     // console.log(hashedPassword);

//     // const isMatch = await bcrypt.compare('red12345', hashedPassword);
//     // console.log(isMatch);
// }

// myFunction();

// const pet = {
//     name :"kela",
//     toi : "randi"
// }
// pet.toJSON = function rrr(){
//     // console.log (this);
//     // return this
//     return {}
// }

// console.log(JSON.stringify(pet) + " this is mario");

// const Task = require('./models/task');
const User = require('./models/user');

const main = async()=>{


// const task = await Task.findById('659fc6d4aef4836523a55b85');
// await task.populate('owner').execPopulate();
// await task.populate([{path: 'owner'}]);
// await task.populate('owner');
// await task.populate('owner').execPopulate();
// console.log(task.owner);


// const user = await User.findById('ivrijrvijvr');
// await user.populate('tasks').execPopulate();
// console.log(user.owner);

}

// let q = "this";
// let w = "is";
// let e = "sparta";


// let chc = {
//     description : "hello",
//     completed : "false"
//  }
//  let ak47 = [];
//  const updates = Object.keys(chc);
// const allowedUpdates = ['description','completed'];
// // const isValidOperation = updates.every((update)=> allowedUpdates.includes(update));
// const testi = updates.every((update)=> {allowedUpdates.forEach((ttt)=>{
    
//     let x = Object.values(ttt);
//     if(x != ''){
//         // console.log('u win')
//         ak47.push(ttt);
//     }
    
    
//     return ak47;
    
//     })
//  }   
// );
// console.log(testi + "its me mario")
// // console.log(isValidOperation);



// let a = "something";
// let b = "needs";
// let c = '';
// let d = "change";
// // const toCheck = [{a},{b},{c},{d}];
// const toCheck = [{a,b,c,d}];

// function khaliString(array){
//     array.forEach((ttt)=>{
    
//         let x = Object.values(ttt);
//         if(x != ''){
//             // console.log('u win')
//             ak47.push(ttt);
//         }
//         // console.log(ak47)
        
        
//         })
//         return ak47;

// }

// let result = khaliString(toCheck)
// console.log(result);



//     let az = "dsc";
//     let sx = "scd";
//     let dc = "dcdv";
//   let qw = {};
//   let check = ['az','sx','dc'];
//   check.forEach((find,index)=>{
//     qw[find] = find;
//   })
// let testis = new Object();
// testis.az = az;
// testis.sx = sx;
// testis.dc = dc;
// console.log("testi");
// console.log(testis);

main();

////////////////////////////270724 reset password
// <!-- forgot-password.html, reset-password.html, index.js -->
app.use(express.urlencoded({extended: false}));
const jwt = require('jsonwebtoken');

let userReset = {
    id: "kujerhfijnhwrifunkrf",
    email: "xxx@gmail.com",
    password: "jhebwnvijbwejhvbrksjnvkjerv"
}

const JWT_SECRET = 'some super secret...';

// // 
// app.get('/',(req,res)=>{
//     res.send('Hello kela');
// });


app.get('/forgot-password',(req,res,next)=>{
    // res.send('forgot-password');
    // return 
    res.redirect('/forgot-password.html');
}); 

app.post('/forgot-password',(req,res,next)=>{
    const {email} = req.body;
    // res.send(email);

    // make sure user exist in database
    if(email !== userReset.email ){
        res.send('user not registered');
        return;
    }
    
    // else{
    //     res.send('user registered');
    //     return;
    // }

    // user exists and now create a one time link valid for 15 minutes
    const secret = JWT_SECRET + userReset.password;
    const payload  = {
        email: userReset.email,
        id: userReset.id
    }

    const token = jwt.sign(payload, secret, {expiresIn: '15m'});
    // const link = `http://localhost:5000/reset-password/${userReset.id}/${token}`;
    const link = `/reset-password.html?id=${userReset.id}&token=${token}`;
    // const link = `http://localhost:5000/reset-password.html`;
    console.log(link);
    res.send('Password reset link has been sent to ur email...');
});

app.get('/reset-password.html/:id/:token',(req,res,next)=>{
    const {id,token} = req.params;
    // res.send(req.params);

    // check if this id exists in database
    if(id !== userReset.id){
        res.send('Invalid id...')
        return;
    }

    // we have a valid id, and we have a valid user with this id
    const secret = JWT_SECRET + userReset.password;
    try{
        const payload = jwt.verify(token,secret);
        // res.render('reset-password', {email:user.email});
    // res.redirect(`/reset-password.html?email=${userReset.email}`);
    res.redirect(`/reset-password.html?${userReset.id}/${token}/test`);
    // res.redirect(`/reset-password.html?something`);
    }catch(error){
        console.log(error.message);
        res.send(error.message);
    }
});

app.post('/reset-password/:id/:token',(req,res,next)=>{
 
// app.post('/reset-password',(req,res,next)=>{
    // console.log(req.body);
    const {id,token} = req.params;
    // res.send(token);
    const {password,password2} = req.body; 
    console.log(password);
    console.log(password2);
    // check if this id exists in database
    if(id !== userReset.id){
        res.send('Invalid id...')
        return;
    }
    const secret = JWT_SECRET + userReset.password;
try{
    
    const payload = jwt.verify(token,secret);
    // validate password and password2 should match
    // we can simply find the user with the payload email and id and finally update with new password
    // always hash the password before saving
    userReset.password = password;
    res.send(userReset);
}catch(error){
    console.log(error.message);
    res.send(error.message);
}
});

////////////////////////////270724 reset password

////////////////////////////280724 sendgrid
// <!-- (index.js is server.js) (contact.html) (sent.html) (sendgrid.js is sendEmail.js)-->
// app.use(express.urlencoded({extended: false})); /////////////////////////////270724 reset password/ coded already
// const sendEmail = require('./utils/sendEmail');
// same up and down but i changed its link
const sendEmail = require('./models/sendgrid');

// app.get("/contact",(req,res)=>{
//     // res.render("contact");
// });

// app.get("/sent",(req,res)=>{
//     res.render("sent");
// });

app.post("/sendemail",(req,res)=>{
    const {name,surname,email} = req.body;

    const from = "cnotice.in@gmail.com";
    const to = "adlerhund@gmail.com";
    const subject = "New Contact Request";

    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${name}</li>
        <li>Surname: ${surname}</li>
        <li>Email: ${email}</li>
    </ul>
    `;

    sendEmail(to,from,subject,output);
    res.redirect("/sent.html");
});

////////////////////////////280724 sendgrid





app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});
