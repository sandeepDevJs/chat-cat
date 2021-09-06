"use strict";

//social auth
require("./auth")();

module.exports = {
	router: require("./routes")(),
	session: require("./session"),
};
