const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth')
const Degree = require('../models/degree');
const User = require('../models/user');


/////////DESIGNATION INSTITUE USES 
router.post('/degree', auth, async(req,res)=>{

    let degreeFromIns = req.body;
    // console.log(req.body);
    // console.log(degreeFromIns.semesterOddStart);
    // if (degreeFromIns.degree == "null"){
    //     console.log("founit")
    // }
    console.log(degreeFromIns.semesterSystemStatus);
    console.log(typeof degreeFromIns.semesterSystemStatus);

    degreeFromIns.semesterSystemStatus = (degreeFromIns.semesterSystemStatus === "true" || degreeFromIns.semesterSystemStatus === true);

    if(degreeFromIns.semesterSystemStatus === true){

        if((degreeFromIns.degree == "null")||(degreeFromIns.department == 0 )||(degreeFromIns.semesterOddStart== 0 )||( degreeFromIns.semesterOddEnd==0) ||(degreeFromIns.semesterEvenStart== 0) || (degreeFromIns.semesterEvenEnd==0) ){
            return res.status(400).send({"error" :"Form incomplete,please fill full form"});
        }
    }else{
        console.log(degreeFromIns.degree);
        console.log(degreeFromIns.department);
        console.log(degreeFromIns.yearStartMonth);
        console.log(degreeFromIns.yearEndMonth);
        if((degreeFromIns.degree == "null")||(degreeFromIns.department == 0 )||(degreeFromIns.yearStartMonth== 0 )||( degreeFromIns.yearEndMonth==0)){
            return res.status(400).send({"error" :"Form incomplete,please fill full form"});
        }

    }
    let shortName = 'RIST';
    let postalPinCode = 781001 ;
    // console.log(req.body.department)
    // const sub = new Subj({
        const degree = {
        ...req.body,
        // postalPinCode: 781001,
        // shortName:'RIST',
        // shortnamePostalPinCodeDepartment: shortName + postalPinCode + req.body.department[0],
        author: req.user._id
    }
    if(req.user.designation !== 'institute'){
        return res.status(401).send({"error" :"unauthorized"});
    }
    
try{

    // status(201)
    // degree.department.forEach(depart=>{
        for (const depart of degree.department){

            const degreeGot = shortName + postalPinCode + depart ;
            const existing = await Degree.findOne({shortnamePostalPinCodeDepartment:degreeGot})
            if (!existing){
            let b = req.body ;
            let s = req.body.semesterOddStart ;
            // let d = req.body.department ;
            // let dsd = b + s+ d;
            // console.log(b)
            // console.log(s)
            const newDepartment = new Degree({
                ...req.body,
                // dsd: b+s+depart, 
                department: depart,
                postalPinCode,
                shortName:'RIST',
                shortnamePostalPinCodeDepartment: shortName + postalPinCode + depart,
                // shortnamePostalPinCodeDepartment: shortName + postalPinCode + req.body.department[0],
                author: req.user._id
    
            })
            // console.log("ooooooo")
            // console.log(degree.department)
            // console.log("ooooooo")
        
            // console.log(newDepartment)
            // console.log(newDepartment.department)
            // console.log(req.body)



         await newDepartment.save();
            
    
            }else{
                // return ;
        console.log("here m i")
                
        const updateDegree = await existing.generateUpdateDegree(req.body)
        console.log(updateDegree)
                // return res.status(400).json({done: 'degree exist'});
            }
        }


    // })

            // 250530
                    const subGotCC = req.body.contactcode ;
                    console.log("subGotCC");
                    console.log(subGotCC);
                    await User.updateOne(
                        {_id:req.user._id},
                        {$set:{contactcode:req.body.contactcode}},
                    {upsert:true}
                    );
                    // 250530

    // res.status(201).send(newDepartment);
    res.status(201).send({'done':'oki'});
}catch(e){
    if(e.code === 11000){
        return res.status(400).json({done: 'duplicate exists'});
    }
    res.status(500).send(e);
}
})

router.get('/degree',auth, async(req,res)=>{
    // const _id = req.params.id;
    try{
        const dep = await Degree.find({author:req.user._id});
        if(!dep){
            return res.status(404).send();
        }
        res.send(dep);
    }catch(e){
        res.status(500).send();
    }
})

router.get('/degreewoauth',auth, async(req,res)=>{
    console.log('semesterSystemStatus');
    // const _id = req.params.id;
    try{
        // const dep = await Degree.find({author:req.user._id});
        const dep = await Degree.find();
        // const filtered = dep.filter(item=> item.semesterSystemStatus === true
        //  );

        if(!dep){
            return res.status(404).send();
        }
        const processedData = dep.map(doc=>{
            const obj = doc.toObject();
            if(obj.semesterSystemStatus === true){
                return obj;
            }else{
                const { semesterOddStart ,semesterOddEnd,semesterEvenStart,semesterEvenEnd , ...xxx} = obj;
                return xxx
            }
        })

        console.log( processedData);
        // if(dep.semesterSystemStatus){
        //     console.log(dep.semesterSystemStatus);
            
        //     console.log(typeof dep.semesterSystemStatus)
        // }


        
                const contactcode = await User.findOne({_id:req.user._id});
                const con = contactcode.contactcode ;
                console.log("contactcode");
                console.log(contactcode);
                console.log(contactcode.contactcode);
                // console.log(sub);
                console.log("contactcode");
                // res.send([sub,con]);
                // res.send({processedData,con});
        res.send(processedData);
    }catch(e){
        res.status(500).send();
    }
})

module.exports = router;
