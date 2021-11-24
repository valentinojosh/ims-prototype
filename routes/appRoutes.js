'use strict';
module.exports = function (app) {
    var minorLogList = require('../controller/minorLogAppController');
    app.route('/fvsra/minorInjuryLog')
        .get(minorLogList.list_all_minorIncidents)
        .post(minorLogList.createMinorIncident)
    app.route('/fvsra/minorInjuryLog/:minor_injury_id')
        .get(minorLogList.read_a_minorIncident)
        .delete(minorLogList.deleteMinorIncident)

    var form01 = require('../controller/accidentIncidentAppController') //This is what I'm working on next
    app.route('/fvsra/accidentIncidentReport')
        .get(form01.list_all_accidentIncidentReports)
    app.route('/fvsra/accidentIncidentReport')
        .get(form01.createAccidentIncidentReport) //Not Tested
        .delete(form01.deleteAccidentIncidentReport) //Not Tested

    var form02 = require('../controller/vehicleAccidentAppController');
    // todoList2 Routes
    app.route('/fvsra/vehicleAccidentReport')
        .get(form02.list_all_vehicleAccidents)
        .post(form02.createVehicleAccident)
    app.route('/fvsra/vehicleAccidentReport/:vehicle_accident_id')
        .get(form02.read_a_vehicleAccident)
        .delete(form02.deleteVehicleAccident)

    var form04 = require('../controller/employeeInjuryReportAppController'); //Waiting for the DB table to be finished
    // todoList3 Routes
    app.route('/fvsra/employeeInjuryReport')
        .get(form04.list_all_employeeInjuryReports)
    app.route('/fvsra/employeeInjuryReport')
        .get(form04.read_a_employeeInjuryReport) //Not Tested
        .delete(form04.deleteMinorIncident) //Not Tested

};