"use strict";

const passport = require("passport");
const h = require("../helpers");

module.exports = () => {
	let routes = {
		get: {
			"/": (req, res, next) => {
				res.render("login");
			},
			"/rooms": (req, res, next) => {
				res.render("rooms");
			},
			"/chat": (req, res, next) => {
				res.render("chatroom");
			},
			"/auth/facebook": passport.authenticate("facebook"),
			"/auth/facebook/callback": passport.authenticate("facebook", {
				successRedirect: "/rooms",
				failureRedirect: "/",
			}),
		},
		post: {
			"/": (req, res, next) => {},
		},

		NA: (req, res, next) => {
			res.status(404);
			res.render("404");
		},
	};

	return h.route(routes);
};
