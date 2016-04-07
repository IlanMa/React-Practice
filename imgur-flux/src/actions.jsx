var Reflux = require('reflux');

module.exports = Reflux.createActions([
	'getTopics', // Runs getTopics in all stores
	'getImages'
]);