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
    Monitor.firstname = req.body.firstname;
    Monitor.lastname = req.body.lastname;
    Monitor.career = req.body.career;
    Monitor.semester = req.body.semester;
    Monitor.identification = req.body.identification;
    Monitor.phonenumber = req.body.phonenumber;
    Monitor.email = req.body.email;

    Monitor.create((err, monitor) => {
      if (err) {
        res.send(err);
      } else {
        res
          .status(201)
          .json({ error: false, message: "Monitor created", data: [monitor] });
      }
    });
  }
};

exports.findById = (req, res) => {
  Monitor.findById(req.params.id, (err, monitor) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ error: false, message: "", data: monitor });
    }
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "All fields are requireds" });
  } else {
    Monitor.findById(req.params.id, (err, found) => {
      if (found.length === 0) {
        res.json({ error: true, message: `Monitor doesn't exists`, data: [] });
      } else {
        Monitor.firstname = req.body.firstname;
        Monitor.lastname = req.body.lastname;
        Monitor.career = req.body.career;
        Monitor.semester = req.body.semester;
        Monitor.identification = req.body.identification;
        Monitor.phonenumber = req.body.phonenumber;
        Monitor.email = req.body.email;
        Monitor.id = req.params.id;

        Monitor.update((err, monitor) => {
          if (err) {
            res.send(err);
          } else {
            res.json({ error: false, message: "Success updating", data: [] });
          }
        });
      }
    });
  }
};

exports.delete = (req, res) => {
  Monitor.findById(req.params.id, (err, found) => {
    if (found.length === 0) {
      res.json({ error: true, message: `Monitor doesn't exists`, data: [] });
    } else {
      Monitor.id = req.params.id;
      Monitor.delete((err, monitor) => {
        if (err) {
          res.send(err);
        } else {
          res.json({ error: false, message: "Success deleting", data: [] });
        }
      });
    }
  });
};
