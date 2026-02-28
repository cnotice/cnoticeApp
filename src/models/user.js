// import Degree from './degree.js';
const mongoose = require ('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
        recruiterId:{
        type: String
        // ,
        // unique: true
        },
        recruiterName:{
        type: String
        // ,
        // unique: true
        },
        contactcode:{
        type: String
        // ,
        // unique: true
        },
    name:{
        type: String
    },
    password: {
        type: String
    },
    designation: {
        type: String
    },
    age: {
        type: Number
    },
    bssd: {
        type: String
    },
    bssds:[{
        bssd:{
        type: String
        // ,
        // unique: true
        },
        subject:{
        type: String
        // ,
        // unique: true
        }
    }],
    studentbssd:[{
        recruiter:{
        type: String
        // ,
        // unique: true
        },
        branch:{
        type: String
        // ,
        // unique: true
        },
        degreeId:{
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Degree'
        // ,
        // unique: true
        },
        semester:{
            type: String
            // ,
            // unique: true
            },
            year:{
                type: String
                // ,
                // unique: true
                },
            registeredYear:{
                type: Number
                // ,
                // unique: true
                },
            totalYear:{
                type: Number
                // ,
                // unique: true
                },
            yearStart:{
                type: Number
                // ,
                // unique: true
                },
            yearEnd:{
                type: Number
                // ,
                // unique: true
                },
                degree:{
                    type: String
                    // ,
                    // unique: true
                    },
        roll:{
        type: String
        // ,
        // unique: true
        }
    }],
    tokens:[{
        token:{
            type:String,
            required: true
        }
    }]
})


userSchema.virtual('subjects',{
    ref: 'Sub',
    localField : '_id',
    foreignField : 'author'
})

userSchema.virtual('tasks',{
    ref: 'task',
    localField : '_id',
    foreignField : 'owner'
})

userSchema.methods.toJSON = function(){
    const user = this;
    const userObject = user.toObject();

    // delete userObject.password;
    // delete userObject.tokens;

    return userObject;
}
userSchema.methods.generateAuthToken = async function(){
    const user = this;
    // Define your payload with multiple data fields
const payload = {
    _id: user._id.toString(),
    designation: user.designation
    // email: "user@example.com",
    // permissions: ["read", "write", "edit"]
  };

    // const token = jwt.sign({_id: user._id.toString()},'thisissecret')
    const token = jwt.sign(payload,'thisissecret')

    user.tokens = user.tokens.concat({token})
    await user.save();
    
    return token;
}



userSchema.virtual('degrees',{
    ref: 'Degree',
    localField : 'degreeId',
    foreignField : '_id'
})

userSchema.methods.generatePromotion = async function(){
    const user = this;

    // Object.prototype.toString.call(value);
    // console.log(Object.prototype.toString.call(value));

    console.log("here to do my taskere to do my taskere to do my taskere to do my taskere to do my taskere to do my taskere to do my taskere to do my taskere to do my taskere to do my taskere to do my taskere to do my taskere to do my taskere to do my taskere to do my taskere to do my taskere to do my task");

    let finder = await User.findById({_id: user._id}).populate('studentbssd.degreeId')
    // console.log(finder); // this way only finds the User but also have Degrree indirectly
    console.log(finder.studentbssd[0].degreeId); // this way to show Degree
    console.log(finder.studentbssd[0].degreeId.semesterSystemStatus)
    console.log(Object.prototype.toString.call(finder));

    // const status = finder.studentbssd[0].degreeId.semesterSystemStatus;
    // console.log(status)



    let totalYear = user.studentbssd[0].totalYear;
    console.log(totalYear);
    console.log(Object.prototype.toString.call(totalYear));
    let semester = Number(user.studentbssd[0].semester);//
    console.log(semester);
    console.log(Object.prototype.toString.call(semester));

    const presentYear = new Date().getFullYear();
    console.log(presentYear);
    console.log(Object.prototype.toString.call(presentYear));
    let registeredYear = user.studentbssd[0].registeredYear;
    console.log(registeredYear);
    console.log(Object.prototype.toString.call(registeredYear));

    let semesterSystemStatus = finder.studentbssd[0].degreeId.semesterSystemStatus;
    console.log(semesterSystemStatus);
    console.log(Object.prototype.toString.call(semesterSystemStatus));
    
    const month = new Date().getMonth()+1;
    console.log(month);
    console.log(Object.prototype.toString.call(month));

    let yearStart = user.studentbssd[0].yearStart;//
    console.log(yearStart);
    console.log(Object.prototype.toString.call(yearStart));

    let yearStartMonth = Number(finder.studentbssd[0].degreeId.yearStartMonth);//
    console.log(yearStartMonth);
    console.log(Object.prototype.toString.call(yearStartMonth));
    let yearEndMonth = Number(finder.studentbssd[0].degreeId.yearEndMonth);//
    console.log(yearEndMonth);
    console.log(Object.prototype.toString.call(yearEndMonth));
    let semesterOddStart = Number(finder.studentbssd[0].degreeId.semesterOddStart);//
    console.log(semesterOddStart);
    console.log(Object.prototype.toString.call(semesterOddStart));
    let semesterOddEnd = Number(finder.studentbssd[0].degreeId.semesterOddEnd);//
    console.log(semesterOddEnd);
    console.log(Object.prototype.toString.call(semesterOddEnd));
    let semesterEvenStart = Number(finder.studentbssd[0].degreeId.semesterEvenStart);//
    console.log(semesterEvenStart);
    console.log(Object.prototype.toString.call(semesterEvenStart));
    let semesterEvenEnd = Number(finder.studentbssd[0].degreeId.semesterEvenEnd);//
    console.log(semesterEvenEnd);
    console.log(Object.prototype.toString.call(semesterEvenEnd));
    // let deg = user.studentbssd[0].degreeId;
    // console.log(deg);
let test = 2*(presentYear - yearStart -1); // YEARSTART FROM USERS


// let totalYear = a; // USER BSSD AND DEGREE
// let semester = b; // USER BSSD AND DEGREE(TO UPDATE)

// let presentYear = c; // PRESENT YEAR JS FUNCTION
// let registeredYear = d; // users userbssd(TO UPDATE)

// // semesterSystemStatus // FROM DEGREE

// let month = e; // PRESENT MONTH JS FUNCTION

// let yearStartMonth = f; // FROM DEGREE
// let yearEndMonth = g; // FROM DEGREE
//     // let semesterOddStart = f; // FROM DEGREE
//     // let semesterOddEnd = g; // FROM DEGREE
//     // let semesterEvenStart = h; // FROM DEGREE
//     // let semesterEvenEnd = i; // FROM DEGREE

// let test = 2*(presentYear - yearStart -1); // YEARSTART FROM USERS





    // console.log(user.id)

    
    // const yearStatus = finder.studentbssd[0].yearStart;
    // console.log(yearStatus)


//     if(status){
// // if true then semester system is active
//     }else{
//         // if false yearly system is active
//         // if(yearNow<)

//     }




    console.log(User.schema.paths.studentbssd.schema.paths.degreeId.options.ref);

    // const huhu = await User.findById({_id:'696c8d231dd47e13ac9612fa'}).populate({
    //     path:'studentbssd.degreeId',
    //     model:'Degree'
    // });
    // console.log(JSON.stringify(huhu.studentbssd,null,2));



    
    async function singleYear(){
    console.log("singleYear")
            if((month>=yearStartMonth)&&(month<=yearEndMonth)&&(presentYear != registeredYear)){
                // change registeredYear && semester
                    let result = presentYear - registeredYear;
                    let resultSemester = semester + result;
                    if(resultSemester<= totalYear){
                        return resultSemester + " promoted will be used and year presemt " +presentYear;
                    }
            }
    }

    async function dualYear(){
    console.log("dualYear")
                // change registeredYear && semester
                    if((month>=1)&&(month<=yearEndMonth)){
                    let result = presentYear - registeredYear;
                    let resultSemester = semester + result -1;
                    if((resultSemester<= totalYear)&&(result-1 >0)){
                        return result+ semester-1 + " add to odd " + semester  + " change year " +resultSemester;
                    }
                    }else if((month>=yearStartMonth)&&(month<=12)){
                    let result = presentYear - registeredYear;
                    let resultSemester = semester + result;
                    if((resultSemester<= totalYear)&&(result > 0)){
                        return result+ semester + " add to even" + semester  + " change year " +resultSemester;
                    }
            }
    }

    async function singleSemester(){

    console.log("singleSemester")
            if((month>=semesterOddStart)&&(month<=semesterOddEnd)){
                    let result = presentYear - registeredYear;
                    totalYear = totalYear * 2;
                        let constant = 0;
                            constant = (2*result)+1;
                    let resultSemester = semester +constant;
                    if((resultSemester<= totalYear)&&(result+1 >0)&&(semester%2==0)){
                            constant = (2*result)+1;
                        return semester +constant + " promoted will1 be used and year presemt " +presentYear;
                        }else if((resultSemester<= totalYear)&&(result >0)&&(semester%2!=0)){
                            constant = 2*result;
                        return semester +constant + " promoted will2 be used and year presemt " +presentYear;
                    }
            }else if((month>=semesterEvenStart)&&(month<=semesterEvenEnd)){
                    let result = presentYear - registeredYear;
                    totalYear = totalYear * 2;
                        let constant = 0;
                            constant = (2*result);
                    let resultSemester = semester +constant - 1;
                    if((resultSemester<= totalYear)&&(result>0)){
                        if(semester%2==0){
                            constant = 2*result;
                        return semester +constant + " promoted wil3l be used and year presemt " +presentYear;
                        }else{
                            constant = (2*result)-1;
                        return semester +constant + " promoted will 4be used and year presemt " +presentYear;
                        }
                    }
            }
            // user.studentbssd[0].semester = 9;
            // await user.save();
    }

    async function dualSemester(){
    console.log("dualSemester")
                if((month>=1)&&(month<=semesterOddEnd)){ 
                    let constant = 1;
                    let calculatedSemester = 0;
                    calculatedSemester = test+ constant;
                    if((test>=0)&&(calculatedSemester<=totalYear)&&(semester<calculatedSemester)){
                        return calculatedSemester+ " promoted";
                    }
                }else if((month>=semesterEvenStart)&&(month<=semesterEvenEnd)){
                    let constant = 2;
                    let calculatedSemester = 0;
                    calculatedSemester = test+ constant;
                    if((test>=0)&&(calculatedSemester<=totalYear)&&(semester<calculatedSemester)){
                        return calculatedSemester + " promoted";
                    }
                }else if((month>=semesterOddStart)&&(month<=12)){
                    let constant = 3;
                    let calculatedSemester = 0;
                    calculatedSemester = test+ constant;
                    if((test>=0)&&(calculatedSemester<=totalYear)&&(semester<calculatedSemester)){
                        return calculatedSemester + " promoted";
                    }
                }
    }


    
        if(semesterSystemStatus){
            if(semesterOddStart<semesterOddEnd){
                // dual = false;
                singleSemester();
            }else{
                // dual = true;
                // return "dual year not counting";
                dualSemester();
            }
        }else{
            if(yearStartMonth<yearEndMonth){
                // dual = false;
                singleYear();
            }else{
                // dual = true;
                // return "dual year not counting";
                dualYear();
            }
        }


}



// console.log(userSchema.schema.paths.address.options.ref);



userSchema.methods.generateBssd = async function(data){
    const user = this;
    user.bssds = user.bssds.concat(data)
    // console.log(user.bssds);
    // console.log(data)
    await user.save();
    
    return user;
}

userSchema.methods.generateStuBssd = async function(data){
    const user = this;
    // user.studentbssd = user.studentbssd.concat(data)
    user.studentbssd = data
    // console.log(user.studentbssd);
    // console.log(data)
    await user.save();
    
    return user;
}
userSchema.statics.findByCredentials = async(name, password) =>{
    const user = await User.findOne({name})
    // const user = await User.find({name})
    // console.log(user);
    if(!user){
        throw new Error('Unable to login')
    }
    // const isMatch = await bcrypt.compare(password,user.password)

    // if(!isMatch){
    //     throw new Error('Unable to login')
    // }

    // console.log(password + "me");
    // console.log(user.password);
    if(password === user.password){
        return user;
    }else{
        throw new Error('Unable to login')
    }
    
}

userSchema.pre('save', async function(next){
    const user = this;
    // console.log("just before saving,user.js,for securely storing passwords part 2 ,lesson 3,section12,104mayb");
    next()
})
// // 250422
// // for simple creation of index without array of objects
// // compound index on designation and studentdetail.roll
// // srtdentdeatil :{ roll{ type ...}}
// userSchema.index({bssd:1, 'studentdetail.roll':1})

// // if array of objects
// // eg: studentdetail:[{
// // roll:{type:string, required: true}
// // otherfield:{type:string}
// // }]
// userSchema.index({"studentdetail.roll":1});
// // multiple fields
// userschema.index({"studentdetail.roll":1,"studentdetail.otherfield":1});

userSchema.index({designation:1, "studentbssd.roll":1});

// // 250422
const User = mongoose.model('User',userSchema)


module.exports = User