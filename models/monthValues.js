const { Schema, model } = require('mongoose');

const monthValuesSchema = new Schema({
  month: {
        type: Number
      },
  year: {
    type: Number,
  },
  income: {
    type: Number,
  },
  expences: {
    type: Number,
  },
  total: {
    type: Number,
  },
  owner:{
    type: Schema.Types.ObjectId,
    ref: 'user',
  }
});

const MonthValues = model('MonthValues', monthValuesSchema)

module.exports = {
    MonthValues
}