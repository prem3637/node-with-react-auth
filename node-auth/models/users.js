const { mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        index:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    }
})
const users = mongoose.model('users',userSchema);
module.exports = users;