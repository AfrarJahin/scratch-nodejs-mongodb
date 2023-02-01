const http = require('http');
const url = require('url');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost/test_db";

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
        const coll = await client.db("test_db").collection("test_collection2");
        await coll.insertOne({
            name: "Afra",
            lang: "Javascript",
        })
        console.log("Connected successfully to server");
    } finally {
        await client.close();
    }
}

connectMongo().catch(console.dir);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running at ${port}`);
});
