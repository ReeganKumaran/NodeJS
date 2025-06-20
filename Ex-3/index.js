const express = require("express")
const app = express();
const PORT = 4000;
const connectDB = require("./config/database")

app.get("/",(req, res)=>{
    res.send("Hello World")
})

connectDB().then(()=>{
    console.log("Database connect successfully")
    app.listen(PORT, ()=>{
    console.log(`Server has started in localhost://4000`);
})
})
.catch((err)=>{
    console.log("Database not connected to our project", err)
})
