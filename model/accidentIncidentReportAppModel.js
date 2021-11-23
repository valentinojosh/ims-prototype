'use strict';
var sql = require('./db.js');
//Task object constructor
var AccidentInjury = function (accidentInjury) {
    //this.injury_date = minorIncident.injury_date;

};
AccidentInjury.getAccidentInjuryByID = function (accident_incident_id, result) {
    //sql.query("Select minor_injury_id, injury_date, injury_time, name_of_injured, injury_location, treatment, how_injury_occurred, facility_where_injury_occurred, full_name_of_staff from Minor_Injury_Log where minor_injury_id = ? ", minor_injury_id, function (err, res) {
    sql.query("Select * from Accident_Incident_Report WHERE accident_incident_id = ? ", accident_incident_id, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
AccidentInjury.getAllAccidentIncidentReports = function (result) {
    sql.query("Select * from Accident_Incident_Report", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('Lost Items : ', res);
            result(null, res);
        }
    });
};
AccidentInjury.createAccidentIncidentReport = function (newAccReport, result) {
    sql.query("INSERT INTO Accident_Incident_Report set ?", newAccReport, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
AccidentInjury.remove = function (accident_incident_id, result) {
    sql.query("DELETE FROM Accident_Incident_Report WHERE accident_incident_id = ?", accident_incident_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = AccidentInjury;