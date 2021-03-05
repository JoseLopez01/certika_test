"use strict";

var db = require("./../../config/db.config");

class Monitor {
  static first_name;
  static last_name;
  static career;
  static semester;
  static identification;
  static phonenumber;
  static email;
  static id;

  constructor() {}

  static create(result) {
    const newMonitor = {
      first_name: this.first_name,
      last_name: this.last_name,
      career: this.career,
      semester: this.semester,
      identification: this.identification,
      phonenumber: this.phonenumber,
      email: this.email,
    };
    db.query("INSERT INTO monitores set ?", newMonitor, (err, res) => {
      if (err) result(err, null);
      result(null, res.insertId);
    });
  }

  static findById(id, result) {
    db.query("SELECT * FROM monitores WHERE id = ?", id, (err, res) => {
      if (err) result(err, null);
      result(null, res);
    });
  }

  static findAll(result) {
    db.query("SELECT * FROM monitores", (err, res) => {
      if (err) result(err, null);
      result(null, res);
    });
  }

  static update(result) {
    const query =
      "UPDATE monitores SET first_name = ?, last_name = ?, career = ?, semester = ?, identification = ?, phonenumber = ?, email = ? WHERE id = ?";
    const fields = [
      this.first_name,
      this.last_name,
      this.career,
      this.semester,
      this.identification,
      this.phonenumber,
      this.email,
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
    db.query("DELETE FROM monitores WHERE id = ?", [this.id], (err, res) => {
      if (err) result(err, null);
      result(null, res);
    });
  }
}

module.exports = Monitor;
