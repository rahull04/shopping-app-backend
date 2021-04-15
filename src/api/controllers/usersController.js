const mongoose = require('mongoose');
//mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true , useUnifiedTopology: true });

const usersModel = require("../model/users");

const Model = mongoose.model;
const User = Model('Users',usersModel);

exports.signup = async (req, res) => {
    console.log(req.body);
    const { email , username , password } = req.body;
    const newUser = new User({
        email:email,
        username:username,
        password:password
    });
    // Find if user exists
    let user = await User.find({ username: username , password:password }).exec();
    // Validate
    if(user.length > 0){
        console.log('User already exists',email);
        return res.status(200).send({success:true,response:"Account already exists wih the email"});
    }
    // Save user data
    console.log('User added',email);
    newUser.save((err,result)=>{
        if(err) console.log(err)
        console.log(result);
        res.status(200).send({success:true,response:"Signup successfull"});
    })
}

exports.login = async (req, res) => {
    console.log(req.body);
    const { username , password } = req.body;
    console.log('Req made to login',username);
    let data = await User.find({ username: username , password:password }).exec();
    res.status(200).send({success:true,data:data});
}