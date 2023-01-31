const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/";

MongoClient.connect(uri, function(err, client) {
    if (err) throw err;

    const db = client.db("testnnnnn");
    console.log("Connected to MongoDB successfully");

    client.close();
});
const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = client;
