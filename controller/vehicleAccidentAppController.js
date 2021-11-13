'use strict';
var vehicleAccident = require('../model/vehicleAccidentAppModel.js');

exports.list_all_vehicleAccidents = function (req, res) {
    console.log("LIST ALL VEHICLE ACCIDENTS");
    vehicleAccident.getAllVehicleAccidents(function (err, item) {
        console.log('controller');
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send(err);
        //console.log('res', task);
        res.send(item);
    });
};
exports.read_a_vehicleAccident = function (req, res) {
    vehicleAccident.getVehicleAccidentByID(req.params.vehicle_accident_id, function (err, item) {
        if (err) res.send(err);
        res.json(item);
    });
};


