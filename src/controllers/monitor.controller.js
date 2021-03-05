"use strict";

const Monitor = require("../models/monitor.model");

exports.findAll = (req, res) => {
  Monitor.findAll((err, monitor) => {
    if (err) {
      res.send(err);
    } else {
      res.send(monitor);
    }
  });
};

exports.create = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "All fields are requireds" });
  } else {
    Monitor.create(req.body, (err, monitor) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ error: false, message: "Monitor created", data: monitor });
      }
    });
  }
};

exports.findById = (req, res) => {
  Monitor.findById(req.params.id, (err, monitor) => {
    if (err) {
      res.send(err);
    } else {
      res.json(monitor);
    }
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "All fields are requireds" });
  } else {
    Monitor.update(req.params.id, req.body, (err, monitor) => {
      if (err) {
        res.send(err);
      } else {
        res.json(monitor);
      }
    });
  }
};

exports.delete = (req, res) => {
  Monitor.delete(req.params.id, (err, monitor) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ error: false, message: "Success deleting " });
    }
  });
};
