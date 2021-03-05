"use strict";

var db = require("./../../config/db.config");

class Monitor {
  constructor() {}

  static create(newMonitor, result) {
    db.query("INSERT INTO monitores set ?", newMonitor, (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res.insertId);
      }
    });
  }

  static findById(id, result) {
    db.query("SELECT * FROM monitores WHERE id = ?", id, (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    });
  }

  static findAll(result) {
    db.query("SELECT * FROM monitores", (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    });
  }

  static update(id, monitor, result) {
    const updateQuery =
      "UPDATE monitores SET first_name = ?, last_name = ?, career = ?, semester = ?, identification = ?, phonenumber = ?, email = ? WHERE id = ?";
    const {
      first_name,
      last_name,
      career,
      semester,
      identification,
      phonenumber,
      email,
    } = monitor;
    db.query(
      updateQuery,
      [
        first_name,
        last_name,
        career,
        semester,
        identification,
        phonenumber,
        email,
        id,
      ],
      (err, res) => {
        if (err) {
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  }

  static delete(id, result) {
    db.query("DELETE FROM monitores WHERE id = ?", [id], (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    });
  }
}

module.exports = Monitor;
