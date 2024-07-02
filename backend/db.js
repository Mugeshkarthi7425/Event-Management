const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://MugeshKarthi_GS:Gsmk%407425@about.7qfkbkc.mongodb.net/Event?retryWrites=true&w=majority&appName=about",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("db connected");
});
db.on("error", () => {
  console.log("db error");
});
