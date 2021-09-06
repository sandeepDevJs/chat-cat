const Mongoose = require("mongoose");

const chatUser = new Mongoose.Schema({
	profileId: String,
	fullName: String,
	profilePic: String,
});

module.exports = Mongoose.model("chatUser", chatUser);
