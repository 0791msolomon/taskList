const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongo = require("./app/mongodb.connection");
const express = require("express");
const app = express();
const router = require("./app/routes/index");

dotenv.config();
const port = process.env.PORT || 3001;
const { MongoClient, ObjectId } = require("mongodb");

let _db = null;

function connect(url, databaseName) {
  if (_db !== null) {
    return Promise.resolve(_db);
  }
  return MongoClient.connect(url).then(client => {
    _db = client.db(databaseName);
  });
}

module.exports = {
  connect,
  connection: { db: () => _db },
  ObjectId
};

//CORS options
const corsConfig = {
  origin: "http://localhost:3000",
  methods: "GET,PUT,POST,DELETE",
  credentials: true,
  allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Cookie",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set headers and end pre-flight requests
app.use(cors(corsConfig));

app.use(router);
app.use((req, res) => {
  console.log(req);
  res.sendStatus(404);
});

//start mongo connection pool, then start express app
mongo
  .connect(
    process.env.MONGODB_URL,
    process.env.DATABASE_NAME
  )
  .then(initializeServer)
  .then(() => {
    console.log(`Magic happens on port: ${port}`);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
function initializeServer() {
  if (process.env.HTTPS === "true") {
    return https.createServer(certOptions, app).listen(port);
  } else {
    return app.listen(port);
  }
}
