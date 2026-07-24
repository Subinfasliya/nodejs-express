const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

require('dotenv').config()
const app = express()

const PORT = process.env.PORT || 5000

connectDB()

app.get("/", (req,res) => {
    res.status(200).json({
        message:"API Calling..."
    })
})

app.use(cors())
app.use(express.json())


app.listen(PORT, () => {
    console.log(`Server running successfully on port ${PORT}`);
    
})
