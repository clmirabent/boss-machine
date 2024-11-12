const express = require("express"); //Import Express ro create routes
const ideasController = require("../controllers/ideasController"); // Import the controller where is the logic to handle the ideas
const ideasRouter = express.Router(); //Express provides a Router object that allows us to define routes in separate modules and then import them into the main application file.
const ideaMiddleware = require("../checkMillionDollarIdea");
const checkMillionDollarIdea = require("../checkMillionDollarIdea");

ideasRouter.get("/", ideasController.getIdeas);
ideasRouter.get("/:id", ideasController.getIdeasById);
ideasRouter.post("/", checkMillionDollarIdea, ideasController.createIdeas);
ideasRouter.put("/:id", ideasController.updateIdeas);
ideasRouter.delete("/:id", ideasController.deleteIdeas);

module.exports = ideasRouter;
