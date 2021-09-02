"use strict";

const config = require("../config");
const Mongoose = require("mongoose");

(async () => {
	try {
		await Mongoose.connect(config.dbURI);
	} catch (error) {
		console.log(err);
	}
})();

module.exports = {
	Mongoose,
};
