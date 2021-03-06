var dbTools = require('./lib/dbTools');
var path = require('path');
var dataDir = path.join(__dirname, 'demo-data');

dbTools.checkTableSetup('midas_user').then(async () => {
  return dbTools.importUsersFromFile(path.join(dataDir, 'users.csv'));
}).then((users) => {
  //console.log('new users created: ', users);
  return dbTools.importTasksFromFile(path.join(dataDir, 'tasks.csv'));
}).then(function (tasks) {
  //console.log('new tasks created: ', tasks);
}).catch(function (err) {
  console.log('err: ', err);
});
