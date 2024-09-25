const mongoose = require("mongoose")
require("dotenv").config()

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected")
    }
    catch (error){
        console.log(error)
        throw new Error ("Failed to connect with MongoDB Atlas")
    }
}

module.exports = dbConnection