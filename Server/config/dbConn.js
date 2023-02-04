const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const connectDB = async () => {
    mongoose.set('strictQuery', true)
    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('MongoDb Connected!')
    } catch(err) {
        console.log(err)
    }
}

module.exports = {connectDB}