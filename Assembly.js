const { DBConnector } = require('./DBConnector');
const { UserService, UserController } = require('./user');
const { Router } = require('./Router');
const express = require('express');
const http = require('http');

class Assembly {

	async init() {
		// core
		this.assembly = this;

		// service
		const serviceItems = await this._initService();
		this.serviceDriver = serviceItems.serviceDriver;
		this.httpServer = serviceItems.httpServer;

		// db Connections
		this.dbConnector = await this._initConnections();

		// app instances
		await this._initAppInstances();

		// should be initialized last because it usually needs all the dependencies
		this.router = new Router(this);
	}

	async _initAppInstances() {
		// order is important
		this.userService = new UserService(this);
		this.userController = new UserController(this);
	}
    
	async _initService() {
		const serviceDriver = express();
		const httpServer = http.Server(serviceDriver);
		return {
			httpServer,
			serviceDriver
		};
	}

	async _initConnections() {
		// NOTE: Put shared connections here.
		// As a good practice, connection error handling should be done here
		// Return a promise for flexibility (see /src/helloworld/HelloWorld.js for usage example)
		return new DBConnector(this);
	}

}

module.exports = {
	Assembly,
};