const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/events';

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
    });
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('Error to connect to MongoDB', error);
  }
};

module.exports = connectDB;
