const mysqlPromise = require('promise-mysql');

const DB_ENDPOINT = 'localhost';

module.exports = {
	createPool: async function () {
		const pool = await mysqlPromise.createPool({
			host: DB_ENDPOINT,
			user: 'xetpyrc',
			password: 'Database!69',
			database: 'magic_qr',
			port: 3306,
			charset: 'utf8_general_ci',
		});
		return pool;
	},
};