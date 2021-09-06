"use strict";

require("dotenv").config();

module.exports = {
	host: process.env.host || "",
	dbURI: process.env.dbURI || "",
	sessionSecret: process.env.sessionSecret || "",
	fb: {
		clientId: process.env.fbClientId,
		clientSecret: process.env.fbClientSecret,
		callbackUrl: `//${process.env.host}:3000/auth/facebook/callback`,
		profileFields: ["id", "displayName", "photos"],
	},
};
