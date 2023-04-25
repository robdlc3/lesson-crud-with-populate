require('dotenv').config()

const mongoose = require('mongoose');


const User = require('./models/User.model');

// ℹ️ Connects to the database
mongoose.connect(process.env.MONGODB_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

// User.collection.drop();

const fakeUsers = [
  {
    username: 'amartin07'
  },
  {
    username: 'luca85'
  },
  {
    username: 'madmax'
  }
];

User.create(fakeUsers)
  .then(dbUsers => {
    console.log(`Created ${dbUsers.length} users`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating fake users in the DB: ${err}`));
