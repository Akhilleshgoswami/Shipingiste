import {app} from './App.js'
import dotenv from 'dotenv'
import connectionToDb from './config/database.js'

dotenv.config({path:"Shipingiste/Backend/config/confin.env"})

//connect to data base

connectionToDb()

app.listen(process.env.PORT,(req,res)=>{
    console.log("sever is runing on " ,process.env.PORT)
})