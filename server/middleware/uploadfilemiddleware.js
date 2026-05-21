const multer = require("multer");
const path = require("path");

const ALLOWED_TYPES = /jpeg|jpg|png|webp/;
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const extname = ALLOWED_TYPES.test(path.extname(file.originalname).toLowerCase());
  const mimetype = ALLOWED_TYPES.test(file.mimetype);
  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Only image files (jpeg, jpg, png, webp) are allowed"));
  }
};

const upload = multer({ storage, fileFilter, limits: { fileSize: MAX_SIZE } });

module.exports = upload;
