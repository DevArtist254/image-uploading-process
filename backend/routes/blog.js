const express = require("express");
const router = express.Router();

const { postBlog, getBlogs, getOne } = require("../controller/blog");

router.route("/post").post(postBlog);
router.route("/all").get(getBlogs)


module.exports = router