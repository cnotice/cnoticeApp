const mongoose = require ('mongoose');

const instituteSchema = new mongoose.Schema({
    name: {
        type: String
    },
    shortName: {
        type: String
    },
    postalPinCode: {
        type: String
    },
    landmark: {
        type: String
    },
    // shortnamePostalPinCodeInstitutename: {
    //     type: String,
    //     unique:true,
    //     required: true
    // },
    shortnamePostalPinLandmark: {
        type: String,
        unique:true,
        required: true
    },
    administrator:{
        type: String
    }
})




instituteSchema.methods.generateUpdateInstitute = async function(data){
    const {instituteName, shortName, postalPinCode, landmark } = data;
    let shortnamePostalPinLandmark = shortName + postalPinCode + landmark;
    const user = this;
    // console.log(this);
     user.name = instituteName;
     user.shortName = shortName;
    user.postalPinCode = postalPinCode; 
    user.landmark = landmark;
     user.shortnamePostalPinLandmark = shortnamePostalPinLandmark; 
    // console.log(this);
    // console.log(user);
    
    await user.save();
    
    return user;
}

const Institute = mongoose.model('Institute',instituteSchema)
module.exports = Institute