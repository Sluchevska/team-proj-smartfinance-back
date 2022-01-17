const { Schema, model, trusted } = require("mongoose");
const Joi = require("joi");
const { version } = require("joi");

const operationSchema = new Schema(
  {
    date: {
      day: {
        type: Number,
        required: true,
      },
      month: {
        type: Number,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    description: {
      type: String,
    },
    type: {
      type: String,
      required: [true, "type is required"],
    },
    sum: {
      type: Number,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const operationJoiSchema = Joi.object({
  date: Joi.object().required(),
  category: Joi.string().required(),
  description: Joi.string(),
  type: Joi.string().valid("income", "expenses").required(),
  sum: Joi.number(),
});

const Operation = model("Operation", operationSchema);

module.exports = {
  Operation,
  operationJoiSchema,
};
