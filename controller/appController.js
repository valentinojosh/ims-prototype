'use strict';
var Incident = require('../model/appModel.js');

exports.list_all_minorIncidents = function (req, res) {
    console.log("LIST ALL Items");
    Incident.getAllMinorIncidents(function (err, item) {
        console.log('controller');
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send(err);
        //console.log('res', task);
        res.send(item);
    });
};
exports.read_a_minorIncident = function (req, res) {
    Incident.getMinorIncidentByID(req.params.minor_injury_id, function (err, item) {
        if (err) res.send(err);
        res.json(item);
    });
};