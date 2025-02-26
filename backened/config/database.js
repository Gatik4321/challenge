const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose
        .connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("MongoDB connected successfully"))
        .catch((error) => console.log("MongoDB connection error:", error));
};

module.exports = connectDatabase;
