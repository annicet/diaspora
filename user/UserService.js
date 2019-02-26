class UserService {
	constructor({
		userRepository,
	}){
		this.createUser = this.createUser.bind(this);
		this.userRepository = userRepository;
	}
	async createUser(user) {
		let result= {};
		if(!user) {
			const e = new Error('there is no user to create');
			result.error = e;
			throw e;
		}
		return await this.userRepository.createUser(user);
	}
}
module.exports = {UserService};