const multer = require('multer');
const path = require('path');

// Configure storage destination and filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the destination folder
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    // Generate a unique filename using a timestamp and original extension
    cb(null, Date.now() + '-' + file.originalname); 
  },
});

// Optional: File filter to accept only certain file types (e.g., images)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Only images are allowed (jpeg, jpg, png, gif)!'));
  }
};

// Create the Multer instance
const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5000000 } // Limit file size to 5MB
});

module.exports = upload;
