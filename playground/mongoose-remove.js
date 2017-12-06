const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/todo');

//Todo.remove({query})

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove()

Todo.findByIdAndRemove('5a2822f8fcfac6140050db3e').then((doc) => {
  console.log(doc);
});
