const getApiInfo = (req,res,next) => {
    try{
       res.status(200).json({
        success:true,
        application:"My Application",
        version:"1.0.0",
        status:"Running",
        endpoints:[
            {
                method:"GET",
                path:"/api/v1/users",
                description:"Retrieve all users"
            }
        ]
       })
    } catch(error){
        next(error)
    }
}

module.exports = getApiInfo