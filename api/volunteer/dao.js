const _ = require('lodash');
const dao = require('postgres-gen-dao');


module.exports = function (db) {
  return {
    Volunteer: dao({ db: db, table: 'volunteer' }),
  };
};