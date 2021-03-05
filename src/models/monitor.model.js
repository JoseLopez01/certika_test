"use strict";

var db = require("./../../config/db.config");

class Monitor {
  static firstname;
  static lastname;
  static career;
  static semester;
  static identification;
  static phonenumber;
  static email;
  static id;

  constructor() {}

  static create(result) {
    const newMonitor = {
      firstname: this.firstname,
      lastname: this.lastname,
      career: this.career,
      semester: this.semester,
      identification: this.identification,
      phonenumber: this.phonenumber,
      email: this.email,
    };
    db.query("INSERT INTO monitors set ?", newMonitor, (err, res) => {
      if (err) result(err, null);
      result(null, res.insertId);
    });
  }

  static findById(id, result) {
    db.query("SELECT * FROM monitors WHERE id = ?", id, (err, res) => {
      if (err) result(err, null);
      result(null, res);
    });
  }

  static findAll(result) {
    db.query("SELECT * FROM monitors", (err, res) => {
      if (err) result(err, null);
      result(null, res);
    });
  }

  static update(result) {
    const query =
      "UPDATE monitors SET firstname = ?, lastname = ?, career = ?, semester = ?, identification = ?, phonenumber = ?, email = ? WHERE id = ?";
    const fields = [
      this.firstname,
      this.lastname,
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
    db.query("DELETE FROM monitors WHERE id = ?", [this.id], (err, res) => {
      if (err) result(err, null);
      result(null, res);
    });
  }
}

module.exports = Monitor;
