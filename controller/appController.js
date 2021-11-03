'use strict';
var Item = require('../model/appModel.js');

exports.list_all_items = function (req, res) {
    console.log("LIST ALL Items");
    Item.getAllItem(function (err, item) {
        console.log('controller');
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send(err);
        //console.log('res', task);
        res.send(item);
    });
};
exports.read_a_item = function (req, res) {
    Item.getItemByID(req.params.minor_injury_id, function (err, item) {
        if (err) res.send(err);
        res.json(item);
    });
};