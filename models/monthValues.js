const { Schema, model } = require('mongoose');

const monthValuesSchema = new Schema({
  date: {
    type: Date,
    default: new Date(),
  },
  category: {
      type: String,
      required: [true, "category is required"],
  },
  description: {
    type: String,
    required: true,
  },
  sum: {
      type: Number,
      required: true,
  },
  isIncome: {
    type: Number,
  },
  owner:{
    type: Schema.Types.ObjectId,
    ref: 'user',
  }
});

// const joiTransactionSchema = Joi.object({
//   date: Joi.date().required(),
//   category: Joi.string().required(),
//   description: Joi.string().required(),
//   amount: Joi.number().required(),
//   isIncome: Joi.boolean(),
// });

const MonthValues = model('MonthValues', monthValuesSchema)

module.exports = {
  MonthValues,
  // joiTransactionSchema
}