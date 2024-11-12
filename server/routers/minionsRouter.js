const express = require("express"); //Import Express ro create routes
const minionsController = require("../controllers/minionsController"); // Import the controller where is the logic to handle the ideas
const workController = require("../controllers/workController");
const minionsRouter = express.Router(); //Express provides a Router object that allows us to define routes in separate modules and then import them into the main application file.

minionsRouter.get("/", minionsController.getMinions);
minionsRouter.get("/:id", minionsController.getMinionsById);
minionsRouter.post("/", minionsController.createMinions);
minionsRouter.put("/:id", minionsController.updateMinions);
minionsRouter.delete("/:id", minionsController.deleteMinionsById);
minionsRouter.get("/:minionId/work", workController.getWork);
minionsRouter.post("/:minionId/work", workController.createWork);
minionsRouter.put("/:minionId/work/:workId", workController.updateWork);
minionsRouter.delete("/:minionId/work/:workId", workController.deleteWorkById);

module.exports = minionsRouter;
