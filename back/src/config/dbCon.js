require("dotenv").config();

const mongoose = require("mongoose");

const dbCon = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        
    } catch (error) {
        console.log('No es posible acceder a la base de datos.');   
    }
}

module.exports = dbCon;