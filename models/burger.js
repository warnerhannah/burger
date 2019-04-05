const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: function(col, val, cb) {
    orm.delete("burgers", col, val, cb, (res) => {
      cb(res);
    });
  }
};

module.exports = burger;