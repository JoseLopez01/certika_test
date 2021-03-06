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
      if (err) {
        result(err, null);
      } else {
        result(null, res.insertId);
      }
    });
  }

  static findById(id, result) {
    db.query("SELECT * FROM monitorings WHERE id = ?", id, (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    });
  }

  static findAll(result) {
    const query = `SELECT mns.id, mns.monitorid, mns.monitoringdate, mns.class, mns.classroom, mo.firstname, mo.lastname
                   FROM monitorings AS mns INNER JOIN monitors as mo ON mns.monitorid = mo.id`;
    db.query(query, (err, res) => {
      if (err) {
        result(err, null);
      } else {
        const mappedResponse = res.map((monitoring) => {
          return {
            id: monitoring.id,
            monitorid: monitoring.monitorid,
            class: monitoring.class,
            classroom: monitoring.classroom,
            monitoringdate: monitoring.monitoringdate,
            monitor: {
              id: monitoring.monitorid,
              firstname: monitoring.firstname,
              lastname: monitoring.lastname,
            },
          };
        });
        result(null, mappedResponse);
      }
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
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    });
  }
}

module.exports = Monitoring;
