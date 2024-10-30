const express = require("express"); //Import Express ro create routes
const meetingsController = require("../controllers/meetingsController"); // Import the controller where is the logic to handle the ideas
const meetingsRouter = express.Router(); //Express provides a Router object that allows us to define routes in separate modules and then import them into the main application file.

// meetingsRouter.get("/", meetingsController.getmeetings);
// meetingsRouter.post("/", meetingsController.createMeetings);
// meetingsRouter.delete("/", meetingsController.deleteAllMeetings);

module.exports = meetingsRouter;
