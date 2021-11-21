'use strict';
module.exports = function (app) {
    var todoList1 = require('../controller/minorLogAppController');
    // todoList1 Routes
    app.route('/fvsra/minorInjuryLog')
        .get(todoList1.list_all_minorIncidents)
        .post(todoList1.createMinorIncident)
    app.route('/fvsra/minorInjuryLog/:minor_injury_id')
        .get(todoList1.read_a_minorIncident)
        .delete(todoList1.deleteMinorIncident)

    var todoList2 = require('../controller/vehicleAccidentAppController');
    // todoList2 Routes
    app.route('/fvsra/vehicleAccidentReport')
        .get(todoList2.list_all_vehicleAccidents)
        .post(todoList2.createVehicleAccident)
    app.route('/fvsra/vehicleAccidentReport/:vehicle_accident_id')
        .get(todoList2.read_a_vehicleAccident)
        .delete(todoList2.deleteVehicleAccident)


};