const http = require('http');
const url = require('url');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://127.0.0.1:27017/";

const server = http.createServer((req, res) => {
    res.end("HEllo");
 /*   const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/api/hello' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello World!' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not Found' }));
    }*/
});

const client = new MongoClient(uri);
async function connectMongo() {
    try {
        await client.connect();
        const db = client.db("testDb");
        db.createCollection("testCollection", function(err, res) {
            console.log("Collection created!");
            client.close();
        });
        console.log("Connected successfully to server");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

const port = process.env.PORT || 3000;
server.listen(port, () => {
  connectMongo().catch(console.dir);
    console.log(`Server running at ${port}`);
});
