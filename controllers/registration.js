const User = require('../models/User');
module.exports = {
    findUser :async (req,res)=> {
        const users = await User.find(); 
        res.send(users)
    },
    userById:async (req,res)=> {

        const id = req.params.id;
        const user = await User.findById(id);
        res.send(user);
    
    },
    register:async (req,res)=> {
        const user = await User.create(req.body);
        res.send("Registratin Done");
    
    }
}