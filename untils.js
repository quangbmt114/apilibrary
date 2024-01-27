const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://quangnv1509:nDtWtSINkSZbxbEP@dhome.qvvod45.mongodb.net/web_movies?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client.db("library");
// console.log("db", db);
module.exports = {
  db,
};
