const mongoose = require("mongoose");

const connectDB = async () =>{
    await mongoose.connect(
        "mongodb+srv://reegank19:KFZxRSRrgyhLf6Lj@reegan.qdu5jej.mongodb.net/?retryWrites=true&w=majority&appName=Reegan"
    )
}
module.exports = connectDB
