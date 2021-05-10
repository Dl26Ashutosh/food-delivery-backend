const jwt =  require('jsonwebtoken');
const PRIVATE = 'gfdas'; 
module.exports = {
    protected : (req,res,next) =>{
        const token = req.headers.token;
        try{
            const decode = jwt.verify(token,PRIVATE);
            req.user = decode
        }
        catch(err){
            return res.status(401).send({message: false})
        }
        next();
    }
}