const mongoose=require('mongoose');
const serverConfig=require('./serverconfig')

async function connectDB(){
    try {
        await mongoose.connect(serverConfig.DB_URL);
        console.log('connected successfully');
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectDB;