import Task from "../models/Task.js";

// 📌 Create new task
export const createTask = async (req, res) => {
  try {
    const { title, description, status, dueDate, priority } = req.body;

    // Ensure task is tied to a user (from auth middleware ideally)
    const userId = req.user?._id || req.body.user; // fallback if no auth middleware

    const newTask = new Task({
      title,
      description,
      status,
      dueDate,
      priority,
      user: userId,
    });

    await newTask.save();
    res
      .status(201)
      .json({ success: true, message: "Task created", task: newTask });
  } catch (error) {
    console.error("Create Task Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// 📌 Get all tasks for a user
export const getTasks = async (req, res) => {
  try {
    const userId = req.user?._id || req.query.user; // optional filtering
    const tasks = await Task.find({ user: userId }).sort({ createdAt: -1 });
    res.json({ success: true, tasks });
  } catch (error) {
    console.error("Get Tasks Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// 📌 Get single task by ID
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task)
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    res.json({ success: true, task });
  } catch (error) {
    console.error("Get Task Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// 📌 Update task
export const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedTask)
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });

    res.json({ success: true, message: "Task updated", task: updatedTask });
  } catch (error) {
    console.error("Update Task Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// 📌 Delete task
export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask)
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });

    res.json({ success: true, message: "Task deleted" });
  } catch (error) {
    console.error("Delete Task Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
