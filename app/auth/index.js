"use strict";

const passport = require("passport");
const FacebooStrategy = require("passport-facebook").Strategy;
const config = require("../config");

module.exports = () => {
	const authProcessor = (accessToken, refreshToken, profile, done) => {};

	passport.use(new FacebooStrategy(confirm.fb, authProcessor));
};
