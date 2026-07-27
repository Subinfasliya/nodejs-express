const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const { userRoutes } = require('./routes/userRoutes')


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


app.use("/users", userRoutes)

app.listen(PORT, () => {
    console.log(`Server running successfully on port ${PORT}`);
    
})
