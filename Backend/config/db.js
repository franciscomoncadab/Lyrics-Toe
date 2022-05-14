import mongoose from "mongoose";

const connectDB = async () => {
     try {
          const connection = await mongoose.connect('mongodb+srv://adminToe:Frankmoncada01@lyricstoe.hs2ow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
               {
               useNewUrlParser: true,
               useUnifiedTopology: true,
               })

          const url = `${connection.connection.host}:${connection.connection.port}`
          console.log(` MongoDB on: ${url} `)

     } catch (err) {
          console.log(`err: ${err.message}`);
          process.exit(1)
     }
}

export default connectDB