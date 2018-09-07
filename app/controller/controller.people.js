const peopleServices = require("../services/services.people");
const responses = require("../responses");
const apiPrefix = "/api/people";

module.exports = { addPerson, getAll, findPerson, update };

function addPerson(req, res) {
  peopleServices
    .addPerson(req.body)
    .then(id => {
      let responseModel = new responses.SuccessResponse();
      res
        .status(201)
        .location(`${apiPrefix}/${id}`)
        .json(responseModel);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(new responses.ErrorResponse(err));
    });
}

function getAll(req, res) {
  peopleServices
    .getAll()
    .then(response => {
      let responseModel = new responses.ItemsResponse();
      responseModel.items = response;
      res.status(200).json(responseModel);
    })
    .catch(err => {
      res.status(500).send(new responses.ErrorResponse(err));
    });
}

function findPerson(req, res) {
  let name = req.query.name || "";
  peopleServices
    .findPerson(name)
    .then(response => {
      let responseModel = new responses.ItemResponse();
      responseModel.items = response;
      res.status(200).json(responseModel);
    })
    .catch(err => {
      res.status(500).send(new responses.ErrorResponse(err));
    });
}

function update(req, res) {
  let id = req.query.id;
  peopleServices
    .update(id, req.body)
    .then(response => {
      let responseModel = new responses.ItemResponse();
      responseModel.items = response;
      res.status(200).json(responseModel);
    })
    .catch(err => {
      res.status(500).send(new responses.ErrorResponse(err));
    });
}
