const express = require("express");
const DataBase = require("../db");

const getIdeas = (req, res) => {
  const allIdeas = DataBase.getAllFromDatabase("ideas");
  if (allIdeas) {
    return res.status(200).json(allIdeas);
  } else return res.status(200).json([]);
};

const getIdeasById = (req, res) => {
  const ideaById = DataBase.getFromDatabaseById("ideas", req.params.id);
  if (ideaById) {
    return res.status(200).json(ideaById);
  } else {
    return res.status(404).send();
  }
};

const createIdeas = (req, res) => {
  const newIdeaInstance = {
    name: req.body.name,
    description: req.body.description,
    numWeeks: req.body.numWeeks,
    weeklyRevenue: req.body.weeklyRevenue,
  };
  const createIdea = DataBase.addToDatabase("ideas", newIdeaInstance);
  if (createIdea) {
    return res.status(201).json(createIdea);
  } else {
    return res.status(400).send();
  }
};

const updateIdeas = (req, res) => {
  const updateInstance = {
    id: req.params.id,
    ...req.body,
  };

  const updated = DataBase.updateInstanceInDatabase("ideas", updateInstance);
  if (updated) {
    return res.status(200).json(updated);
  } else {
    return res.status(404).send();
  }
};

const deleteIdeas = (req, res) => {
  const remove = DataBase.deleteFromDatabasebyId("ideas", req.params.id);
  if (remove) {
    return res.status(204).send();
  } else {
    return res.status(404).send();
  }
};

module.exports = {
  getIdeas,
  getIdeasById,
  createIdeas,
  updateIdeas,
  deleteIdeas,
};
