const mongoose = require("mongoose")


async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI,{
      dbName: "appstore"
    } )
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDB