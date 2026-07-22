const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.get("/", (req,res) => {
    res.status(200).json({
        message:"API Calling..."
    })
})

app.listen(PORT, () => {
    console.log(`Server running successfully on port ${PORT}`);
    
})
