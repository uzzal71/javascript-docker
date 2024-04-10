import Post from "../models/postModel";

export getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: posts
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            error: err
        });
    }
}

export getOnePost = async (req, res, next) => {
    try {
        const posts = await Post.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: posts
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            error: err
        });
    }
}