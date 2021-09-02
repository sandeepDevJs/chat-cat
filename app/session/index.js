"use strict";

const session = require("express-session");
const MongoStore = require("connect-mongo");
const config = require("../config");

if (process.env.NODE_ENV === "production") {
	module.exports = session({
		secret: config.sessionSecret,
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({ mongoUrl: config.dbURI }),
	});
} else {
	module.exports = session({
		secret: config.sessionSecret,
		resave: false,
		saveUninitialized: true,
	});
}
