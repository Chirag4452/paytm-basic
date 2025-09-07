const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
    throw new Error("MONGODB_URI is not set");
}
mongoose.connect(mongoUri);

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
    User,
    Account,
};