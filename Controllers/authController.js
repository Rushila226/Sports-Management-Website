
import User from '../models/UserSchema.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import crypto from 'crypto'


const generateToken=user=>{
     // Generate a random secret key using crypto
    //  const secretKey = crypto.randomBytes(256).toString('base64');
     

     // Sign the JWT token using the generated secret key
    //  return jwt.sign({ id: user._id }, secretKey, {
    //      expiresIn: '15d'
    //  });
    return jwt.sign({id:user._id},process.env.JWT_SECRET_KEY),{
        expiresIn:'15d'
    }
}
export const register=async(req,res)=>{
    const{email,password,name}=req.body;

    try{
        let user=null;
        user= await User.findOne({email})
        //check if user exist
        if(user){
            return res.status(400).json({message:'User already exist.'});
        }
        //hash password
        const salt=await bcrypt.genSalt(10)
        const hashPassword=await bcrypt.hash(password,salt)
        user=new User({
            name,
            email,
            password:hashPassword,
            
        })
        await user.save()
        res.status(200).json({success:true,message:'user successfully created'})
    }
    catch (e){
        res.status(500).json({success:true,message:'Internal server error ,try again'})

    }
};
 export const login=async(req,res)=>{
    const{email,password}=req.body
    try{
       let user=null; 
       const person=await User.findOne({email});
       user=person;
       //check if user exist or not
       if(!user){
        return res.status(404).json({message:"user not found"});

       }
       const isPasswordMatch= bcrypt.compare(req.body.password,user.password)
       if(!isPasswordMatch){
        return res
            .status(400)
            .json({ status:false ,message:"invalid credentials"});

       }
       //get token
       const token = generateToken(user);

        const { password, ...rest } = user._doc;
        res.status(200).json({ status: true, message: 'Successfully logged in', token, data: { ...rest } });
    //    const token =generateToken(user);

    //    const {password,...rest}=user.doc;
    //    res
    //         .status(200)
    //         .json({ status:true ,message:"successfully login",token,data:{...rest}});

    }
    catch (e){
        res.status(500)
.json({ status:false ,message:"Failed to login"});

    }
};



