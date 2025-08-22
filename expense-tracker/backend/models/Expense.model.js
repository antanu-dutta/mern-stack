const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // assumes you have a User model
      required: true,
    },
    icon: { type: String },
    category: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: [0, "Amount must be positive"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } // adds createdAt and updatedAt
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
