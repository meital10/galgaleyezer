const express = require("express");
const router = express.Router();
const imageService = require("../service/image.service");
const multer = require("multer");
const User = require("../models/users.model");
const cloudinary = require("../config/imageUpload");
const path = require("path");

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  console.log("path", file);
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("invalid image file", false);
  }
};

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image")) {
//     console.log("path", path);
//     cb(null, true);
//   } else {
//     cb("invalid image file", false);
//   }
// };

const upload = multer({ storage, fileFilter });

// ---------------------------------------------UPLOAD USER AVATAR--------------------------------------------------
router.post("/", upload.single("profile"), async (req, res) => {
  console.log("user", req.user);
  console.log("file", path);

  const result = await cloudinary.uploader.upload(req.file.path, {
    public_id: `${user._id}_profile`,
    width: 500,
    height: 500,
    crop: "fill",
  });
  console.log("result", result);
  // try {
  //   const result = await cloudinary.uploader.upload(req.file.path, {
  //     public_id: `${user._id}_profile`,
  //     width: 500,
  //     height: 500,
  //     crop: "fill",
  //   });
  //   await User.findByIdAndUpdate(user._id, { avatar: result.url });
  //   // await imageService.uploadProfileImage(user._id, { avatar: result.url });
  //   res.status(201).json({ success: true, message: "profile updated" });
  // } catch (err) {
  //   console.log("err uploading profile", err.massage);
  //   res.status(500).json({
  //     success: false,
  //     message: "sever err",
  //   });
  // }
});

module.exports = router;
