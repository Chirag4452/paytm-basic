const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
    throw new Error("MONGODB_URI is not set");
}

mongoose.connect(mongoUri)
    .then(async () => {
        console.log("Connected to MongoDB");

        // Clean up conflicting collections if they exist
        try {
            const db = mongoose.connection.db;
            const collections = await db.listCollections().toArray();
            const userCollections = collections.filter(col => col.name === 'users');

            if (userCollections.length > 0) {
                console.log("Found existing users collection, dropping it to fix schema mismatch...");
                await db.dropCollection('users');
                console.log("Dropped users collection. It will be recreated with correct schema.");
            }
        } catch (error) {
            console.log("No existing users collection found or error during cleanup:", error.message);
        }
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });

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