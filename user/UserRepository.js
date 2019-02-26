/**
 * Service to manage all user table
 */
class UserRepository {
	constructor({
		dbConnector
	}) {
		this.dbConnector = dbConnector;
		this.createUser = this.createUser.bind(this);
	}
    
	async createUser(user) {
		try{
			const db = await this.dbConnector.getDBConnection();
			return db.users.insert(user);
		} catch (err) {
			console.log('Error while creating user');
			throw err;
		} 
	}
}

module.exports = { UserRepository };