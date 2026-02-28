const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async(req,res,next)=>{
    // 1
    // console.log('Auth middleware');
    // next();
    // 2
    try{
        const token = req.header('Authorization').replace('Bearer ', '');
        // console.log(token);
        const decoded = jwt.verify(token,'thisissecret');
        // console.log(decoded);
        const user = await User.findOne({_id:decoded._id, 'tokens.token':token})
        // console.log(user);

        if(!user){
            throw new Error();
        }
        req.token = token;
        req.user = user;
        // console.log(user);
        next();
        // console.log(token);
    }catch(e){
        res.status(401).send({error:'please authenticate.'})
    }
}

module.exports = auth;