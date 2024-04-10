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
};

export getOnePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: post
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            error: err
        });
    }
};

export createPost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body);

        res.status(200).json({
            status:'success',
            data: post
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            error: err
        });
    }
};

export updatePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: post
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            error: err
        });
    }
}

export deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            error: err
        });
    }
}