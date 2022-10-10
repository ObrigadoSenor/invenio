import mongoose from "mongoose";

const dbName = "invenio";
const password = "xKLxjHgKjyHB49p-ngfT47Xf";
const mongoUrl = `mongodb+srv://activity:${password}@${dbName}.k2y5q.mongodb.net/${dbName}?retryWrites=true&w=majority`;

export const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(mongoUrl, {});
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};
