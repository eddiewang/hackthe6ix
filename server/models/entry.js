'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var EntrySchema = new Schema({
   author:
   _entryId: Schema.Types.ObjectId,
   date: { type: Date, default: Date.now },
   body: String,
   tags: [String],
   sentiments: [{
      sentiment: String,
      percentage: Number
   }]
})

mongoose.model('Entry', EntrySchema);
