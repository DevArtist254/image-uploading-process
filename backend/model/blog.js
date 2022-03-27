const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
	title: {
		type: String,
		minlength: [3, "Minlength is 3"],
		maxlength: [50, "maxlength is 20"],
		required: [true, "Title is required"]
	},
	images: {
		type: Array,
		min: 1,
		max: 10,
		required: [true, "Title is required"]
	},
	body: {
		type: String,
		required: [true, "Title is required"]
	},
}, {timestamps:true})

const Blog = mongoose.model("blog", BlogSchema)
module.exports = Blog