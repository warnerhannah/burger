const connection = require("../config/connection.js");

function printQuestionMarks(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  const arr = [];
  for (let key in ob) {
    let value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}


const orm = {
  all: function(tableInput, cb) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    let queryString = "INSERT INTO " + table;
    let qs = vals.length

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(qs);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(table, objColVals, condition, cb) {
    let queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
    // let queryString = "UPDATE" + table + " SET " + objToSql(objColVals) + " WHERE " + condition;
    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  delete: function(table, col, val, cb) {
    let queryString = "DELETE FROM ?? WHERE ?? = ?"
    connection.query(queryString, [table, col, val], (err, result) => {
      if (err) throw err;
      cb(result)
    });
  },
};

module.exports = orm;
