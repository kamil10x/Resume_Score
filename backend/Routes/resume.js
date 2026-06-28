const express = require("express");
const router = express.Router();
const ResumeController = require("../Controllers/resume");
const { upload } = require("../utils/multer");


//api end points

router.post(
    "/addResume",
    upload.single("resume"),
    ResumeController.addResume
);

/*
router.get(
    "/get",
    ResumeController.getAllResumesForUser
    );
*/
router.get("/get/admin", ResumeController.getResumeForAdmin);
router.get("/get/:user", ResumeController.getAllResumesForUser);


module.exports = router;