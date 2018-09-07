const mongo = require("../mongodb.connection");
const connection = mongo.connection;
const ObjectId = mongo.ObjectId;

module.exports = { addPerson, getAll, findPerson, update };

function addPerson(doc) {
  return connection
    .db()
    .collection("people")
    .insertOne(doc)
    .then(response => Promise.resolve());
}

function getAll() {
  return connection
    .db()
    .collection("people")
    .find()
    .toArray()
    .then(response => {
      for (let i = 0; i < response.length; i++) {
        let item = response[i];
        item._id = item._id.toString();
      }
      return response;
    });
}

function findPerson(name) {
  return connection
    .db()
    .collection("people")
    .aggregate([{ $match: { name: new RegExp(name, "i") } }])
    .toArray()
    .then(response => {
      for (let i = 0; i < response.length; i++) {
        let item = response[i];
        item._id = item._id.toString();
      }
      return response;
    });
}
function update(id, data) {
  return connection
    .db()
    .collection("people")
    .update({ _id: new ObjectId(id) }, { $set: data })
    .then(response => Promise.resolve());
}

// .update({ _id: new ObjectId(id) }, { $set: doc })
//     .then(result => Promise.resolve());
