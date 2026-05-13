require('dotenv').config()
const express = require("express");
const mongoose=require("mongoose")
const app = express();
const userRoutes = require('./routes/userRoutes');
const errormiddleware = require("./middleware/errormiddleware");

app.use(express.json()); 
async function dbConnection(){
    try{
       await mongoose.connect(process.env.MONGO_URI)
        console.log("DB IS CONNECTION");
        
    }
    catch{
        console.log(error);
        
    }
}
dbConnection();

app.use('/api/users', userRoutes);
app.use(errormiddleware);

const port = process.env.PORT || 5000;



app.listen(port,()=>{
    console.log(`server is running 🤸🤸 ${port}`);
})

