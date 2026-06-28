const multer = require("multer");
const path = require("path");

//multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype == "application/pdf") cb(null, true);
    else cb(new Error("Only pdf applwed"), false);
};

exports.upload = multer({ storage, fileFilter });
