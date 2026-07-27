const errorHandler = (err,req,res,next) => {
    let statusCode = err.statusCode || 500
    let message = err.message || "Something went wrong, Please try again!"

    return res.status(statusCode).json({
        success:false,
        message
    })
}

module.exports = errorHandler