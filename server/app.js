require('dotenv').config()
const express = require("express");
const mongoose=require("mongoose")
const app = express();
const userRoutes = require('./routes/userRoutes');
const mealRoutes=require("./routes/mealRoutes");
const errormiddleware = require("./middleware/errormiddleware");

app.use(express.json()); 
const cors = require('cors');
app.use(cors());    

async function dbConnection(){
    try{
       await mongoose.connect(process.env.MONGO_URI)
       console.log("DB IS CONNECTION");
        
    }
    catch(error){
        console.log(error);
    }
}
dbConnection();
app.use(errormiddleware);
// routes
app.use('/api/users', userRoutes);
app.use("/api", mealRoutes);




const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server is running 🤸🤸 ${port}`);
})

