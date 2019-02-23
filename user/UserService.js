class UserService {
	constructor(){
		this.createUser = this.createUser.bind(this);
	}
	createUser(user) {
		let result= {};
		if(!user) {
			const e = new Error('there is no user to create');
			result.error = e;
			throw e;
		}
	}
}
module.exports = {UserService};