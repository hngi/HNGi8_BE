module.exports = {
  port: process.env.PORT || 5600,
  host: process.env.HOST || 'localhost',
  dbPass: process.env.PASS || 'hngi8be',
  dbname: process.env.NAME || 'hngi8be',
  dbconnection: process.env.DBURL || 'mongodb+srv://hngi8be:hngi8be@hngi8.qqarl.mongodb.net/hngi8be?retryWrites=true&w=majority',
  sessionKey: process.env.SESSIONKEY || 'f3e29360-dd0e-438c-80b8-b33c00ee6d8c'
};
