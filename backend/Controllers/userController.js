import User from "../models/UserSchema.js"
export const getuser=async(req,res)=>{
    const id=req.params.id;
    try{
        const user=await User.findById(id).select("-password");
    res.status(200).json({
            success:true,
            message:"user found",
            data:user,
        });
    }catch (err){
        res.status(404).json({success:false,message:"no user found"});
    }

};
export const getAlluser=async(req,res)=>{
  
    try{
        const users=await User.find({}).select("-password");
        res.status(200).json({
            success:true,
            message:"users found",
            data:users,
        });
    }catch (err){
        res.status(404).json({success:false,message:"not found"});
    }

};