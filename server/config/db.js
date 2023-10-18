const moongose=require('mongoose');
moongose.set('strictQuery',false);

const connectDB=async()=>{
    try {
        const conn=await moongose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectDB;