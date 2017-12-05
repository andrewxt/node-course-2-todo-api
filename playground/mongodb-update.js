// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server!', err);
  }
  console.log('Connected to MongoDB server');

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate(
  //   {text: 'Eat lunch'},
  //   {$set: {completed: true}}
  // ).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate(
    {name: 'Andrew'},
    {
      $inc: {
        age: 1
      }
    }
  ).then((result) => {
    console.log(result);
  })
//  db.close();
});
