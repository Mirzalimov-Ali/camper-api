const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "avatar") {
      cb(null, "public/uploads/users");
    }
    if (file.fieldname === "motorCarPhoto") {
        cb(null, "public/uploads/motors");
    }
    if (file.fieldname === "caravanCarPhoto") {
        cb(null, "public/uploads/caravans");
    }
    if (file.fieldname === "tuningCarPhoto") {
        cb(null, "public/uploads/tunings");
    }
    if (file.fieldname === "usedCarPhoto") {
        cb(null, "public/uploads/usedCars");
    }
    if (file.fieldname === "campingPlacePhoto") {
        cb(null, "public/uploads/campingPlaces");
    }  
  },
  filename: function (req, file, cb) {
    if (file.fieldname === "avatar") {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    }
    if (file.fieldname === "motorCarPhoto") {
        cb(
          null,
          file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    }
    if (file.fieldname === "caravanCarPhoto") {
        cb(
          null,
          file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    }
    if (file.fieldname === "tuningCarPhoto") {
        cb(
          null,
          file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    }
    if (file.fieldname === "usedCarPhoto") {
        cb(
          null,
          file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    }
    if (file.fieldname === "campingPlacePhoto") {
        cb(
          null,
          file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    }
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpeg|png|jpg|avif|gif|svg/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (extname) {
    return cb(null, true);
  } else {
    cb("Error: You can only image upload!");
  }
}

const upload = multer({
  storage,
  limits: { fileSize: "1048576" },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

module.exports = upload;
