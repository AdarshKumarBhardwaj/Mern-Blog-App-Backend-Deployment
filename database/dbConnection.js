import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGOURI, {
      dbName: "MERN_STACK_BLOG_APP",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Some Error Occurs While Connecting Database");
    });
};
