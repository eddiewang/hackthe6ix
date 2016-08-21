'use strict';

var database = require('./database');

var input = {'id' : 1, 'name' : 'test'};
var newUser = {'id' : 2, 'name' : 'newUser'}
var date = new Date().toJSON().slice(0, 10);
var input2 = {
   'userId' : 1,
   'content' : 'test string content blah blah blah',
   'date': date,
   'emotions': {'happy' : 0.35, 'sad' : 0.56},
   'tags': ['happy', 'great', 'ambiguous']
}
var input3 = {
   'userId' : 1,
   'content' : 'test string content blah blah blah',
   'date': date,
   'emotions': {'happy' : 0.35, 'sad' : 0.56}

}
console.log(input.id);
database.saveUser(input);
database.saveUser(newUser);
database.saveEntry(input2);
database.saveEntry(input3);
database.retrieveEntryByUser(input);
