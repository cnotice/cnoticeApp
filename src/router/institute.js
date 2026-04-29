const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth')
const Institute = require('../models/institute');
const Degree = require('../models/degree');
const User = require('../models/user');


/////////DESIGNATION INSTITUE USES 
// router.post('/institute', auth, async(req,res)=>{
//     try{
//         const { instituteId, name, address, courses } = req.body;
//         let institute;

//         // case1: create new institute
//         if(!instituteId){
//             if(!name){
//                 return res.status(400).json({error:"Institute name is required"});
//             }

//             institute = await Institute.create({name, address});
//         }
//         // case 2: use existing institute
//         else{ 
//             institute = await Institute.findById({ instituteId});
//             if(!institute){
//                 return res.status(404).json({error: "Institute not found"});
//             }
//         }

//         let createdCourses = [];
//         if(courses && courses.length>0){
//             const courseData = courses.map(course =>({
//                 name: course.name,
//                 duration :course.duration,
//                 institute: institute._id
//             }));
//             createdCourses = await Course.insertMany(courseData);

//         }
//         res.json({
//             message:"saved successfully",
//             institute,
//             courses: createdCourses
//         });

//     } catch(err){
//         res.status(500).json({error: err.message});
//     }
// });




/////////DESIGNATION INSTITUE USES 
router.post('/institute', auth, async(req,res)=>{

    try{

        
    let degreeFromIns = req.body;

    degreeFromIns.semesterSystemStatus = (degreeFromIns.semesterSystemStatus === "true" || degreeFromIns.semesterSystemStatus === true);

    if(degreeFromIns.semesterSystemStatus === true){
        if((degreeFromIns.degree == "null")||(degreeFromIns.department == 0 )||(degreeFromIns.semesterOddStart== 0 )||( degreeFromIns.semesterOddEnd==0) ||(degreeFromIns.semesterEvenStart== 0) || (degreeFromIns.semesterEvenEnd==0) ){
            return res.status(400).send({"error" :"Form incomplete,please fill full form"});
        }
    }else{
        if((degreeFromIns.degree == "null")||(degreeFromIns.department == 0 )||(degreeFromIns.yearStartMonth== 0 )||( degreeFromIns.yearEndMonth==0)){
            return res.status(400).send({"error" :"Form incomplete,please fill full form"});
        }
    }

    if(req.user.designation !== 'institute'){
        return res.status(401).send({"error" :"unauthorized"});
    }



    ////////////////// institute model
    ////////////////////////////////// name/
    ////////////////////////////////// shortName/
    ////////////////////////////////// postalPinCode/
    ////////////////////////////////// shortnamePostalPinCodeInstitutename///
    ////////////////////////////////// administrator/
////////// institue object id
        const { instituteName,shortName, postalPinCode, landmark, contactcode } = req.body;
        let instituteId;
        let administrator = req.user._id;

        // // case1: create new institute
        // if(!instituteId){
        //     if(!instituteName){
        //         return res.status(400).json({error:"Institute name is required"});
        //     }

        //     institute = await Institute.create({name : instituteName, shortName, postalPinCode, administrator });
        // }
        // // case 2: use existing institute
        // else{ 
        //     institute = await Institute.findById(instituteId);
        //     if(!institute){
        //         return res.status(404).json({error: "Institute not found"});
        //     }
        // }

        const userContactcode = await User.findByIdAndUpdate(req.user._id , {contactcode}, {new:true});


                            const instituteGot = shortName + postalPinCode + landmark ;
                            
        const existingInstitute = await Institute.findOne({shortnamePostalPinLandmark:instituteGot})
                    ///////////////////////////////////////institue id , department)
                    // const existing = await Degree.findOne({institute: institute._id})
                    if (!existingInstitute){
                     instituteId = new Institute({
                        ...req.body,
                        // department: depart,
                        // postalPinCode, //////////////////////////////////
                        // shortName:'RIST', ///////////////////////////////
                        // shortnamePostalPinCodeDepartment: shortName + postalPinCode + depart,///////
                        shortnamePostalPinLandmark: shortName + postalPinCode + landmark,///////
                        // shortnamePostalPinCodeDepartment: shortName + postalPinCode + req.body.department[0],///////////////////////////////////
                        administrator: req.user._id,
                        // ,
                        name: instituteName
                    })
                  instituteId = await instituteId.save();
        const user = await User.findById(req.user._id);
                 await user.generateUpdateUser(instituteId);

                    }else{
                        ///////////////////////////check
                 instituteId = await existingInstitute.generateUpdateInstitute(req.body)
                    }



    // let shortName = 'RIST';
    // let postalPinCode = 781001 ;
    // // const sub = new Subj({
        const degree = {
        ...req.body,
        // postalPinCode: 781001,
        // shortName:'RIST',
        // shortnamePostalPinCodeDepartment: shortName + postalPinCode + req.body.department[0],
        author: req.user._id
        // ,
        // institute: institute._id
    }
    
                for (const depart of degree.department){
                            const degreeGot = shortName + postalPinCode + depart ;
                            const existing = await Degree.findOne({shortnamePostalPinCodeDepartment:degreeGot})
                    ///////////////////////////////////////institue id , department)
                    // const existing = await Degree.findOne({institute: institute._id})
                    if (!existing){
                    const newDepartment = new Degree({
                        ...req.body,
                        department: depart,
                        // postalPinCode, //////////////////////////////////
                        // shortName:'RIST', ///////////////////////////////
                        shortnamePostalPinCodeDepartment: shortName + postalPinCode + depart,///////
                        // shortnamePostalPinCodeDepartment: shortName + postalPinCode + req.body.department[0],///////////////////////////////////
                        author: req.user._id,
                        // ,
                        institute: instituteId._id
                    })
                 await newDepartment.save();
                    }else{
                        ///////////////////////////check
                const updateDegree = await existing.generateUpdateDegree(req.body)
                    }
                }
        

                
        // let createdCourses = [];
        // if(courses && courses.length>0){
        //     const courseData = courses.map(course =>({
        //         name: course.name,
        //         duration :course.duration,
        //         institute: institute._id
        //     }));
        //     createdCourses = await Course.insertMany(courseData);
        // }





    //     res.json({
    //         message:"saved successfully",
    //         institute,
    //         courses: createdCourses
    //     });
    // } catch(err){
    //     res.status(500).json({error: err.message});
    // }
    let redirect= "dashboard.html"
    res.status(201).send({'done':'oki',redirect});
}catch(e){
    if(e.code === 11000){
        return res.status(400).json({done: 'duplicate exists'});
    }
    res.status(500).send(e);
}





});


module.exports = router;
