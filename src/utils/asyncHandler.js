const asyncHandler = (requestHandler)=>{
    return (req,res,next)=>{
        Promise
        .resolve(requestHandler(req,res,next))
        .catch((error)=> next(error))
    }
}
export {asyncHandler}

/*
// higher order function (take another function and makes wrapper around it (same as above)
const asyncHandler = (fn) =>  async (req,res,next)=>{
    try {
        await fn(req,res,next);
    } catch (error) {
        res.status(error.code || 500).json({
            success:false,
            message:error.message
        });
    }
}
*/