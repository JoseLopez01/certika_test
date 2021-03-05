"use strict";

const Monitoring = require("../models/monitoring.model");
const Monitor = require("../models/monitor.model");

exports.findAll = (req, res) => {
  Monitoring.findAll((err, monitorings) => {
    if (err) {
      res.send(err);
    } else {
      res.send(monitorings);
    }
  });
};

exports.create = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "All fields are requireds " });
  } else {
    Monitor.findById(req.body.monitorid, (err, monitor) => {
      if (monitor.length === 0) {
        res.status(404).json({ error: true, message: "Monitor not found" });
      } else {
        Monitoring.monitorid = req.body.monitorid;
        Monitoring.class = req.body.class;
        Monitoring.monitoringdate = req.body.monitoringdate;
        Monitoring.classroom = req.body.classroom;

        Monitoring.create((err, monitoring) => {
          if (err) {
            res.send(err);
          } else {
            res.status(201).json({
              error: false,
              message: "Monitoring created",
              data: monitoring,
            });
          }
        });
      }
    });
  }
};

exports.findById = (req, res) => {
  Monitoring.findById(req.params.id, (err, monitoring) => {
    if (err) {
      res.send(err);
    } else {
      res.json(monitoring);
    }
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "All fields are requireds" });
  } else {
    Monitor.findById(req.body.monitorid, (err, monitor) => {
      if (monitor.length === 0) {
        res.status(404).json({ error: true, message: "Monitor not found" });
      } else {
        Monitoring.findById(req.params.id, (err, found) => {
          if (found.length === 0) {
            res.status(404).json({ error: true, message: "Monitoring not found" });
          } else {
            Monitoring.id = req.params.id;
            Monitoring.monitorid = req.body.monitorid;
            Monitoring.class = req.body.class;
            Monitoring.classroom = req.body.classroom;
            Monitoring.monitoringdate = req.body.monitoringdate;

            Monitoring.update((err, monitoring) => {
              if (err) {
                res.send(err);
              } else {
                res.json(monitoring);
              }
            });
          }
        });
      }
    });
  }
};

exports.delete = (req, res) => {
  Monitoring.findById(req.params.id, (err, found) => {
    if (found.length === 0) {
      res.json({ error: true, message: "Monitoring not found" });
    } else {
      Monitoring.id = req.params.id;
      Monitoring.delete((err, monitoring) => {
        if (err) {
          res.send(err);
        } else {
          res.json({ error: true, message: "Sucess deleting" });
        }
      });
    }
  });
};
