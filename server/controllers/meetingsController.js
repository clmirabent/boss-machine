const express = require("express");
const DataBase = require("../db");
const { all } = require("../../server");

const getMeetings = (req, res) => {
  const allMeetings = DataBase.getAllFromDatabase("meetings");
  if (allMeetings) {
    return res.status(200).json(allMeetings);
  } else return res.status(200).json([]);
};

const createMeeting = (req, res) => {
  //el test me dice que la meeting should persist to the DB, es decir que no se está guardando, pero aquí se está guardando no?
  const meetingCreated = DataBase.createMeeting();
  DataBase.addToDatabase("meetings", meetingCreated);
  if (meetingCreated) {
    return res.status(201).json(meetingCreated);
  } else {
    return res.status(400).send();
  }
};

const deleteMeetings = (req, res) => {
  const meetingDeleted = DataBase.deleteAllFromDatabase("meetings");
  if (meetingDeleted) {
    return res.status(204).send();
  } else {
    return res.status(404).send();
  }
};

module.exports = {
  getMeetings,
  createMeeting,
  deleteMeetings,
};
