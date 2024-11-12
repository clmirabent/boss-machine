const express = require("express");
const DataBase = require("../db");

const getMinions = (req, res) => {
  const allMinions = DataBase.getAllFromDatabase("minions");
  if (allMinions) {
    return res.status(200).json(allMinions);
  } else return res.status(200).json([]);
};

const getMinionsById = (req, res) => {
  const minionById = DataBase.getFromDatabaseById("minions", req.params.id);
  if (minionById) {
    return res.status(200).json(minionById);
  } else {
    return res.status(404).send();
  }
};

const createMinions = (req, res) => {
  const newMinionInstance = {
    name: req.body.name,
    title: req.body.title,
    salary: req.body.salary,
  };
  const createMinion = DataBase.addToDatabase("minions", newMinionInstance);
  if (createMinion) {
    return res.status(201).json(createMinion);
  } else {
    return res.status(400).send();
  }
};

const updateMinions = (req, res) => {
  const updateInstance = {
    id: req.params.id,
    ...req.body,
  };

  const updated = DataBase.updateInstanceInDatabase("minions", updateInstance);
  if (updated) {
    return res.status(200).json(updated);
  } else {
    return res.status(404).send();
  }
};

const deleteMinionsById = (req, res) => {
  const remove = DataBase.deleteFromDatabasebyId("minions", req.params.id);
  if (remove) {
    return res.status(204).send();
  } else {
    return res.status(404).send();
  }
};

module.exports = {
  getMinions,
  getMinionsById,
  createMinions,
  updateMinions,
  deleteMinionsById,
};
