
const mongoose = require('mongoose');

const dbSchema = mongoose.Schema({

    user_id: {
        type: String,
        required: [true, "Please enter the User ID"]
    },
    email: {
       type: String,
       required: [true, "Please enter your valid Email"]
    },
    roll_number: {
        type: String,
        required: true
    },
    numbers: {
        type: [String], // Storing numbers as strings for flexibility
        required: true
    },
    alphabets: {
        type: [String], // Array to store individual characters
        required: true
    },
    highest_alphabet: {
        type: [String], // Array to store highest occurring alphabet
        required: true
    },
    is_success: {
        type: Boolean,
        required: true
    }
});

const DataModel = mongoose.model("Data", dbSchema);

module.exports = DataModel;
