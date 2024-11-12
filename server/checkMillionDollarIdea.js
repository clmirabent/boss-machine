const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body; //extract numWeeks and weeklyRevenue from the request body.

  if (!numWeeks || !weeklyRevenue) {
    //check if both properties exist; if not, we return an error.
    return res.status(400).send("Missing numWeeks or weeklyRevenue property");
  }

  const numWeeksNumber = parseFloat(numWeeks);
  const weeklyRevenueNumber = parseFloat(weeklyRevenue);

  if (isNaN(numWeeks) || isNaN(weeklyRevenue)) {
    return res
      .status(400)
      .send("numWeeks or weeklyRevenue must be a valid number");
  }

  const totalValue = numWeeksNumber * weeklyRevenueNumber; //calculate the totalValue of the idea.

  if (totalValue < 1000000) {
    //If the totalValue is less than one million, we send an error response.
    return res
      .status(400)
      .send("Idea is not worth at least one million dollars");
  }

  next();
};

module.exports = checkMillionDollarIdea;
