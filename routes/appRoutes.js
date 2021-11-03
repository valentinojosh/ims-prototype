'use strict';
module.exports = function (app) {
    var todoList = require('../controller/appController');
    // todoList Routes
    app.route('/fvsra/minorInjuryLog')
        .get(todoList.list_all_items)

    app.route('/fvsra/minorInjuryLog/:minor_injury_id')
        .get(todoList.read_a_item)
};