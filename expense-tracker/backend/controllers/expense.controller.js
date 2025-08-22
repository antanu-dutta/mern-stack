const Expense = require("../models/Expense.model.js");
const xlsx = require("xlsx");

// add Expense source
exports.addExpense = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, category, amount, date } = req.body;
    // validation: check for missing field
    if (!category || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newExpense = new Expense({ userId, icon, category, amount, date });
    await newExpense.save();
    res.status(200).json(newExpense);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// ✅ Get all expenses for a user
exports.getAllExpense = async (req, res) => {
  const userId = req.user.id;

  try {
    const expenses = await Expense.find({ userId }).sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// ✅ Delete an expense by ID
exports.deleteExpense = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params; // expense ID from URL

  try {
    const expense = await Expense.findOneAndDelete({ _id: id, userId });
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// ✅ Download all expenses as Excel
exports.downloadExpenseExcel = async (req, res) => {
  const userId = req.user.id;

  try {
    const expenses = await Expense.find({ userId }).sort({ date: -1 });

    // convert to plain objects
    const data = expenses.map((exp) => ({
      Category: exp.category,
      Amount: exp.amount,
      Date: exp.date.toISOString().split("T")[0],
      Description: exp.description || "",
    }));

    // build workbook
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Expenses");

    // send as buffer (no file saved on server)
    const buffer = xlsx.write(wb, { type: "buffer", bookType: "xlsx" });
    res.setHeader("Content-Disposition", "attachment; filename=expenses.xlsx");
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.send(buffer);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
