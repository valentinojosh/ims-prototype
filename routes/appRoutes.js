'use strict';
module.exports = function (app) {
    var todoList = require('../controller/minorLogAppController');
    // todoList Routes
    app.route('/fvsra/minorInjuryLog')
        .get(todoList.list_all_minorIncidents)
        .post(todoList.createMinorIncident)

    app.route('/fvsra/minorInjuryLog/:minor_injury_id')
        .get(todoList.read_a_minorIncident)
        .delete(todoList.deleteMinorIncident)
        .put(todoList.updateMinorIncident)
};