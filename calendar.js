const config = require(./config.json); 

const { MongoClient } = require('mongodb');
const uri = config.mongodb_uri;
const client = new MongoClient(uri);

function initialize() {
	try {
		await client.connect();
		await listDatabases(client);
		
		console.log("database connected");
	} catch (e) {
		console.error(e);
	}
}
