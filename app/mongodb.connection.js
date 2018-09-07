const { MongoClient, ObjectId } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config(); // read .env configuration file

let _db = null;

function connect(url, databaseName) {
  if (_db !== null) {
    return Promise.resolve(_db);
  }

  return MongoClient.connect(url /* , { poolSize: 10 } */).then(
    client => (_db = client.db(databaseName))
  );
}

module.exports = {
  connect,
  connection: { db: () => _db },
  ObjectId
};
