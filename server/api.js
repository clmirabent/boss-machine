const express = require("express");

// Import the routers
const ideasRouter = require("./routers/ideasRouter");
const meetingsRouter = require("./routers/meetingsRouter");
const minionsRouter = require("./routers/minionsRouter");

//Use the routers
const apiRouter = express.Router();

apiRouter.use("/ideas", ideasRouter);
apiRouter.use("/meetings", meetingsRouter);
apiRouter.use("/minions", minionsRouter);

module.exports = apiRouter;
