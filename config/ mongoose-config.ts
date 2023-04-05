import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://12345:54321@cluster0.585lspq.mongodb.net/sample_mflix?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default mongoose.connection;
