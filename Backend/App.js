import express from 'express'
import {Error} from './Middleware/Error.js'
const app = express();
app.use(express.json())
// Router imports
import product  from './routes/productRoute.js'
import user from './routes/userRoute.js'
app.use('/api/v1',product)
app.use('/api/v1',user)
// middle ware 
app.use(Error)
export {app}