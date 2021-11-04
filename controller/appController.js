'use strict';
var minorIncident = require('../model/appModel.js');

exports.list_all_minorIncidents = function (req, res) {
    console.log("LIST ALL Items");
    minorIncident.getAllMinorIncidents(function (err, item) {
        console.log('controller');
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send(err);
        //console.log('res', task);
        res.send(item);
    });
};
exports.read_a_minorIncident = function (req, res) {
    minorIncident.getMinorIncidentByID(req.params.minor_injury_id, function (err, item) {
        if (err) res.send(err);
        res.json(item);
    });
};
exports.createMinorIncident = function (req, res) {
    console.log("POST CREATED");
    var new_minorIncident = new minorIncident(req.body);
    console.log( new_minorIncident );
    //handles null error
    if (!new_minorIncident.injury_date || !new_minorIncident.injury_time || !new_minorIncident.name_of_injured ||
        !new_minorIncident.injury_location || !new_minorIncident.treatment || !new_minorIncident.how_injury_occurred ||
        !new_minorIncident.facility_where_injury_occurred || !new_minorIncident.full_name_of_staff) {
        res.status(400).send({error: true, message: 'Please provide minor incident'});
    } else {
        minorIncident.createMinorIncident(new_minorIncident, function (err, item) {
            if (err) res.send(err);
            res.json(item);
        });
    }
};