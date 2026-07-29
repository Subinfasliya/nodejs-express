const mongoose = require('mongoose')

const connectDB = async()=> {
    try {
       const conn =  await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDB connected on ${conn.connection.host}`);
        
    } catch (error) {
        console.log("Database not connected", error);
        
    }
}

module.exports = connectDB