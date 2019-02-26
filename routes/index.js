const userRoute = require('./user_route');
module.exports = function(app, db) {
	userRoute(app, db);
};