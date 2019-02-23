/* eslint-disable no-console */
const { Assembly } = require('./Assembly');
const assert = require('assert');

/**
 * Application entry point
 */

const port = 8000;

class Main {
	constructor() {
		this.assembly = new Assembly();
	}

	/**
   * Initialize the assembly dependency
   *
   * @returns {Promise} - An empty promise but with the assembly filled
   *
   * @memberOf Main
   */
	async initDependencies() {
		await this.assembly.init();
	}

	/**
   * Starts the service (express)
   *
   * @memberOf Main
   */
	async startService() {
		const { router, httpServer } = this.assembly;
		assert(router, 'expected router');
		// assert(logger, 'expected logger');
		assert(httpServer, 'expected httpServer');
		await router.registerRoutes();
		await new Promise(resolve => httpServer.listen(port, () => resolve()));
		console.log('We are live on ' + port);
	}
}

async function run() {
	const main = new Main();
	try {
		await main.initDependencies();
		await main.startService();
	} catch (err) {
		console.log(`Unexpected error initialization: ${err}`);
	}
}

module.exports = run();
