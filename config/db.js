import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

const connectDB2 = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(conn => {
      console.log(
        `Connected To MongoDB Database ${conn.connection.host}`.bgMagenta.white
      );
    })
    .catch(error => {
      console.log(`Error in MongoDB: ${error}`.bgRed.white);
    });
};

export default connectDB;
