const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDB database connected`);
        
    } catch(error){
        console.log(`MongoDB`);
        
    }
}

module.exports = connectDB