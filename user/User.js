class User {
	constructor(user) {
		if (!arguments.length) {
			this.user_firstName = null;
			this.user_lastName = null;
			this.userType = null;
			this.email = null;
			this.telephone = null;
		} else {
			this.user_ID = user.user_ID;
			this.user_firstName = user.user_firstName;
			this.user_lastName = user.user_lastName;
			this.userType = user.userType;
			this.email = user.email;
		}
	}
}
  
module.exports = { User };