// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server!', err);
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
    console.log(result.result);
  });
  //deleteOne
  db.collection('Users').deleteOne({_id: new ObjectID('5a25ba2a7a54900a4017dba4')}).then((result) => {
    console.log(result.result);
  });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

//  db.close();
});
