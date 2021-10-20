
const CatchAsynceError  = (mainFunction)=> (req,res,next)=>{

Promise.resolve(mainFunction(req,res,next)).catch(next)

}
export {CatchAsynceError }