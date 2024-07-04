import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "HOSPTIAL_MANAGEMENT_DEPLOYED",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error ocurred while connecting to database: ${err}`);
    });
};
