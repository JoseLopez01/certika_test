"use strict";

const db = require("../../config/db.config");

class Monitoring {
  static id;
  static class;
  static monitorid;
  static monitoringdate;
  static classroom;

  constructor() {}

  static create(result) {
    const newMonitoring = {
      class: this.class,
      monitorid: this.monitorid,
      monitoringdate: this.monitoringdate,
      classroom: this.classroom,
    };
    db.query("INSERT INTO monitorings SET ?", newMonitoring, (err, res) => {
      if (err) result(err, null);
      result(null, res.insertId);
    });
  }

  static findById(id, result) {
    db.query("SELECT * FROM monitorings WHERE id = ?", id, (err, res) => {
      if (err) result(err, null);
      result(null, res);
    });
  }

  static findAll(result) {
    db.query("SELECT * FROM monitorings", (err, res) => {
      if (err) result(err, null);
      result(null, res);
    });
  }

  static update(result) {
    const query =
      "UPDATE monitorings SET monitorid = ?, monitoringdate = ?, class = ?, classroom = ? WHERE id = ?";

    const fields = [
      this.monitorid,
      this.monitoringdate,
      this.class,
      this.classroom,
      this.id,
    ];
    db.query(query, fields, (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    });
  }

  static delete(result) {
    db.query("DELETE FROM monitorings WHERE id = ?", [this.id], (err, res) => {
      if (err) result(err, null);
      result(null, err);
    });
  }
}

module.exports = Monitoring;
