import ErrorHandelar from "../utils/errorhandler.js";
import { CatchAsynceError } from "../Middleware/catchasynceError.js";
import UserModel from "../module/UserModel.js";

const registerUser = CatchAsynceError( async(req,res,next)=>{

    const {name,email,password} = req.body;
    const user = await UserModel.create({
        name,email,password,avatar:{
            public_id:"this is a semple",
            url:"this is a semple"
        }
    })
    res.status(201).json({success:true,user})
})
 export {registerUser}