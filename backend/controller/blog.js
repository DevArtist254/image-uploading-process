const ErrorResponse = require("../utils/errorResponse");
const Blog = require("../model/blog");

exports.postBlog = async (req, res, next) => {
    const { title, images, body } = req.body

    try {
        const blog = await Blog.create({ title, images, body })

        res.status(201).json({
            success: true,
            data: blog
        })
    } catch (error) {
        next(error)
    }
}

exports.getBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find({})

        res.status(200).json({
            success: true,
            data: blogs
        })
    } catch (error) {
        next(error)
    }
}

exports.getOne = async(req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id)

        if(!blog){
            return next(new ErrorResponse("No such blog", 404))
        }

        res.status(200).json({
            success: true,
            data: blog
        })

    } catch (error) {
        next(error)
    }
}