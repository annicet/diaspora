const MassiveClient = require('massive');

/**
 * Class used through the repositories to get a DBConnection
 */
class DBConnector {
	constructor() {
		this.dbConnection = this.connect();
	}

	/**
   * Method to call to get a DBConnection
   */
	async getDBConnection() {
		return this.dbConnection;
	}
	/**
   * Method which will connect the application to the DB.
   * This method can be called again if the connection was lost
   */
	connect() {
		return MassiveClient({
			host: 'localhost',
			port: 5432,
			database: 'Diaspora',
			user: 'dev',
			password: 'dev',
			ssl: false,
			poolSize: 18
		}).then((db) => {
			console.log('Succesfully connected to DB');
			return db;
		}).catch((err) => {
			console.log('Error during connection');
		});
	}
}

module.exports = { DBConnector };