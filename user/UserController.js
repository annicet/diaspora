class UserController {
	constructor({
		userService
	}) {
		this.userService = userService;
		this.createUser = this.createUser.bind(this);
	}
    
	async createUser(req, res) {
		let firstName;
		let lastName;
		let email;
		let userType;
		let telephone;
		if(req.body) {
			firstName = req.body.firstName;
			lastName = req.body.lastName;
			email = req.body.email;
			userType = req.body.userType;
			telephone = req.body.telephone;
		}
		if(!firstName || !lastName || !email || !userType || !telephone) {
			res.statusCode = 400;
			const e = new Error ('Mandatory parameters are missing'); 
			res.json(e);
			throw e;
		}
		const user = req.body;
		const result = this.userService.createUser(user);
		if(!result.error)
			res.statusCode = 201;
		res.json(result);
	}
}

module.exports = {
	UserController
};