const multer = require("multer");

// configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// file filer
const fileFilter = (req, file, cb) => {
  const allowedType = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedType.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpeg, .jpg, .png formats are allowed"), false);
  }
};

exports.upload = multer({
  storage,
  fileFilter,
});
