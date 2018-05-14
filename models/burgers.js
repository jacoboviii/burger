// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

let burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    insertOne: function(col, val, cb) {
        orm.insertOne('burgers', col, val, function(res) {
        cb(res);
        });
    },
    updateOne: function(col, val, colCond, valCond, cb) {
        orm.updateOne('burgers', col, val, colCond, valCond, function(res) {
        cb(res);
        });
    }
};

module.exports = burger;


// var cat = {
//   all: function(cb) {
//     orm.all("cats", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("cats", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("cats", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };
