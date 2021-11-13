'use strict';
var sql = require('./db.js');
//Task object constructor
var vehicleAccident = function (minorIncident) {
    // this.injury_date = minorIncident.injury_date;
    // this.injury_time = minorIncident.injury_time;
    // this.name_of_injured= minorIncident.name_of_injured;
    // this.injury_location = minorIncident.injury_location;
    // this.treatment = minorIncident.treatment;
    // this.how_injury_occurred = minorIncident.how_injury_occurred;
    // this.facility_where_injury_occurred = minorIncident.facility_where_injury_occurred;
    // this.full_name_of_staff = minorIncident.full_name_of_staff;
};
vehicleAccident.getVehicleAccidentByID = function (vehicle_accident_id, result) {
    sql.query("Select * from Vehicle_Accident_Report WHERE vehicle_accident_id = ? ", vehicle_accident_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
vehicleAccident.getAllVehicleAccidents = function (result) {
    sql.query("Select * from Vehicle_Accident_Report", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('Lost Items : ', res);
            result(null, res);
        }
    });
};
module.exports = vehicleAccident;