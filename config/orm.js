const connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

// selectAll()
// insertOne()
// updateOne()

const orm = {
    selectAll: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
    insertOne: function(table, col, val, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)" + ";";
        connection.query(queryString, [table, col, val], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
      updateOne: function(table, col, val, colCond, valCond, cb){
          const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?" + ";";
          console.log(table)
          console.log(col)
          console.log(val)
          console.log(colCond)
          console.log(valCond)
          connection.query(queryString, [table, col, val, colCond, valCond], function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
            console.log(result);
          });
      }
};

module.exports = orm;