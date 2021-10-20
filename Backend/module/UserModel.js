import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please Enter Your Name"],
    maxlength: [30, "name can not excced 30 characters"],
    minlength: [4, "name should have more then 5 characters"],
  },
  email: {
    type: String,
    required: [true, "please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "please Enter Your Password"],
    minlength: [8, "name should have 8 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,


});
  userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    this.password = await bcrypt.hash(this.password, 10);
  });
export default mongoose.model("User",userSchema)
