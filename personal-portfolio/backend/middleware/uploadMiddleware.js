import multer from "multer";

const storage = multer.memoryStorage(); // Save in memory temporarily
const upload = multer({ storage });

export default upload;
