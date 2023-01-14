import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    const { connection } = await mongoose.connect(Process.env.MONGOBD_URI);
    if (connection.readyState == 1) {
      alert("connected successfuly");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongoDb;
