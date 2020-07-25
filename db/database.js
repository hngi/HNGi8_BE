/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
const mongoose = require('mongoose');
const config = require('../config.js');
const { seedAdmin } = require('../seed');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
  DOCKER_MONGO
} = process.env;
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

const connect = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(
        process.env.NODE_ENV === 'test'
          ? global.__MONGO_URI__
          : DOCKER_MONGO === 'true'
            ? url
            : config.dbconnection,
        {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true
        }
      ).then(() => {
        console.log('successfully connected to mongodb atlas');
        seedAdmin();
      });
    } catch (err) {
      console.error('App starting error:', err.stack);
      // process.exit(1);
    }
  }
};

const truncate = async () => {
  if (mongoose.connection.readyState !== 0) {
    const { collections } = mongoose.connection;

    const promises = Object.keys(collections).map((collection) => mongoose.connection.collection(collection).deleteMany({}));

    await Promise.all(promises);
  }
};

const disconnect = async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }
};

module.exports = {
  connect,
  truncate,
  disconnect
};
