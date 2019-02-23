const bodyParser = require('body-parser');
class Router {
	constructor({
		serviceDriver,
		userController
	}) {
		this.serviceDriver = serviceDriver;
		this.userController = userController;
	}
    
	registerRoutes() {
		this.serviceDriver.use(bodyParser.json()); // for parsing application/json
		this.serviceDriver.use( bodyParser.urlencoded({ extended: true }) // application/x-www-form-urlencoded
		);
		this.serviceDriver.put('/user', this.userController.createUser);
	}
}

module.exports = {
	Router
};