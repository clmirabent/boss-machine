const express = require("express");
const DataBase = require("../db");

const getWork = (req, res) => {
  const works = DataBase.getAllFromDatabase("work");
  const workByMinion = works.filter((e) => e.minionId === req.params.minionId);
  if (workByMinion.length > 0) {
    return res.status(200).json(workByMinion);
  } else return res.status(404).send();
};

const createWork = (req, res) => {
  const newWorkInstance = {
    title: req.body.title,
    description: req.body.description,
    hours: req.body.hours,
    minionId: req.body.minionId,
  };
  const createWork = DataBase.addToDatabase("work", newWorkInstance);
  if (createWork) {
    return res.status(201).json(createWork);
  } else {
    return res.status(400).send();
  }
};

const updateWork = (req, res) => {
  const workById = DataBase.getFromDatabaseById("work", req.params.workId);

  if (!workById) {
    return res.status(404).send();
  }

  const minionById = DataBase.getFromDatabaseById(
    "minions",
    req.params.minionId
  );

  if (!minionById || workById.minionId !== minionById.id) {
    return res.status(400).send();
  }

  const updateInstance = {
    id: req.params.workId,
    ...req.body,
  };
  const updated = DataBase.updateInstanceInDatabase("work", updateInstance);

  if (updated) {
    return res.status(200).json(updated);
  } else {
    return res.status(400).send();
  }
};

const deleteWorkById = (req, res) => {
  const remove = DataBase.deleteFromDatabasebyId("work", req.params.workId);
  if (remove) {
    return res.status(204).send();
  } else {
    return res.status(404).send();
  }
};

module.exports = {
  getWork,
  createWork,
  updateWork,
  deleteWorkById,
};
