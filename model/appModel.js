'use strict';
var sql = require('./db.js');
//Task object constructor
var Item = function (item) {
    this.injury_date = item.injury_date;
    this.injury_time = item.injury_time;
    this.name_of_injured= item.name_of_injured;
    this.injury_location = item.injury_location;
    this.treatment = item.treatment;
    this.how_injury_occurred = item.how_injury_occurred;
    this.facility_where_injury_Occured = item.facility_where_injury_Occured;
    this.full_name_of_staff = item.full_name_of_staff;
};
Item.getItemByID = function (minor_injury_id, result) {
    sql.query("Select minor_injury_id, injury_date, injury_time, name_of_injured, injury_location, treatment, how_injury_occurred, facility_where_injury_Occured, full_name_of_staff from Minor_Injury_Log where minor_injury_id = ? ", minor_injury_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Item.getAllItem = function (result) {
    sql.query("Select * from Minor_Injury_Log", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('Lost Items : ', res);
            result(null, res);
        }
    });
};

module.exports = Item;