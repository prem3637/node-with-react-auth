const jwt = require('jsonwebtoken');
const users = require('../models/users');

async function requireAuth(req,res,next){
    try{

        // read token of cookies
        const token = req.cookies.Authorization
        // decode the token
        const decode = jwt.verify(token,process.env.SECRET)

        //check expiration
            if(Date.now()>decode.exp){
                return res.sendSattus(401)
            }

        // fnd user using decoded sub
        const user = await users.findById((decode.sub))
        if(!user){
            return res.sendSattus(401)
        }
        // attach user to req
        req.user = user
        //continue on
        next();
    }catch(err){
        console.log(err)
        return res.sendStatus(401)
    }
}
module.exports = requireAuth