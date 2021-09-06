"use strict";

const passport = require("passport");
const FacebooStrategy = require("passport-facebook").Strategy;
const config = require("../config");
const { userModel } = require("../schemas");

module.exports = () => {
	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		userModel.findById(id, (error, user) => {
			if (error) {
				console.log("error getting user", user);
				return false;
			}

			done(null, user);
		});
	});

	const authProcessor = (accessToken, refreshToken, profile, done) => {
		userModel.findOne({ profileId: profile.id }).then((result) => {
			if (result) {
				done(null, result);
			} else {
				let chhatUser = new userModel({
					profileId: profile.id,
					fullName: profile.displayName,
					profilePic: profile.photos[0] || " ",
				});

				chhatUser.save((err) => {
					if (err) {
						console.log(err);
					} else {
						done(null, chhatUser);
					}
				});
			}
		});
	};

	passport.use(new FacebooStrategy(config.fb, authProcessor));
};
