const users = require("../models/users");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const usersController = {
  signup: async (req, res) => {
    try{
        const {email,password} = req.body
        const hashPassword = bcrypt.hashSync(password,8)
        await users.create({email,password:hashPassword});
        res.sendStatus(200)
    }catch(err){
        console.log(err)
        res.sendStatus(400)
    }
  },
  login: async (req, res) => {
   try{
    const {email,password}= req.body
    const user = await users.findOne({email:email})
    if(!user){
        return res.sendStatus(401)
    }
    const passwordMatch = bcrypt.compareSync(password,user.password)
    if(!passwordMatch){
        return res.sendStatus(401)
    }

    // creat JWT Token
    const exp = Date.now() + 1000*60*60*24*30 // 1 month exp
    const token = jwt.sign({sub:user._id,exp},process.env.SECRET)

    // set cookie
        res.cookie("Authorization",token,{
            expires:new Date(exp),
            httpOnly:true,
            sameSite:'lax',
            secure:process.env.NODE_ENV==='production',
        })
    res.sendStatus(200)
   }catch(err){
    console.log(err)
    res.sendStatus(400)
   }
  },
  logout: (req, res) => {
    try{
    res.clearCookie('Authorization')
    res.sendStatus(200)
    }catch(err){
        console.log(err)
        res.sendStatus(400)
    }
  },
  checkAuth:async(req,res)=>{
    try{
        console.log(req.user)
        res.sendStatus(200)
    }catch(err){
        res.sendStatus(401)
    }
  }
};
module.exports = usersController;
