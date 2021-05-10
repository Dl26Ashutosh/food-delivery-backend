const jwt =  require('jsonwebtoken');
const User = require('../models/User');
const PRIVATE = 'gfdas'; 
module.exports = {
    login : async (req,res) => {
    const {email, password} = req.body; 
    const user = await User.findOne({email: email}); 
    if (user){
        if(user.password === password){

           const token =jwt.sign(user.toJSON(), PRIVATE);
        //    res.send({token:token});
        //    const token = req.headers.token;
           if(token)
           {
               const decode = jwt.verify(token,PRIVATE);
               req.user = decode
               res.status(200).send({token:token,message:"Logged In"})
           }
           else{
                res.status(401).send({message: "unauthorized access"})
           }
        }else{
            res.status(401).send({message:"Incorrect password"});
        }
    }else{
        res.status(401).send({message:"User does not exist"});
    }
}
}
