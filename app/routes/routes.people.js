const router = require("express").Router();
const peopleController = require("../controller/controller.people");

module.exports = router;

router.put("/:id", peopleController.update);
router.get("/find", peopleController.findPerson);
router.post("/", peopleController.addPerson);
router.get("/", peopleController.getAll);
