const { Schema, model } = require('mongoose');

const monthValuesSchema = new Schema({
  month: {
        type: Number
      },
  year: {
    type: Number,
  },
  profit: {
    type: Number,
  },
  comsumprion: {
    type: Number,
  },
  total: {
    type: Number,
  },
  userId:{
    type: Schema.Types.ObjectId,
    ref: 'user',
  }
});

const MonthValues = model('MonthValues', monthValuesSchema)

module.exports = {
    MonthValues
}