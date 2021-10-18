import  mongoose  from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectionToDb = ()=>{
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connneted to mongodb"))
  .catch((err) => console.log(err));
}
export default connectionToDb;