const PostModel = require('../models/postModel.js');
const User      = require('../models/user.js');
const fs        = require('fs');
const path      = require('path');

// creating a post

const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json(error);
  }
};

// get a post

const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json(error);
  }
};

// update post
const updatePost = async (req, res) => {
  const postId = req.params.id;
  //const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    //if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post updated!");
    // } else {
    //   res.status(403).json("Updated failed");
    // }
  } catch (error) {
    res.status(400).json(error);
  }
};

// delete a post
const deletePost = async (req, res) => {

  const id = req.params.id;

  try {

    const post = await PostModel.findById(id);

	if (post === null) {
		throw new Error(`The post with id ${id} doesn't exist`);
	}

	if (post.image) {

		const imagePath = path.join(
			global.rootDir, 
			'public/images/post/', 
			path.basename(post.image)
		);

		if (fs.existsSync(imagePath)) {
			fs.unlinkSync(imagePath);
		}
	}

    await post.deleteOne();

    res.status(200).json("Post deleted.");

  } catch (error) {
    res.status(400).json(error.message);
  }
};


// Get posts
const getPosts = async (req, res) => {

  try {

  	let qty = 10;
	let date = new Date((new Date(Date.now())).toISOString());

  	if ('qty' in req.query) qty = parseInt(req.query.qty);
  	if ('before' in req.query) date = new Date(req.query.before);

	let posts = await PostModel.aggregate([
		{ $match: { createdAt: { $lt: date } } },
		{ $sort: { createdAt: -1 } },
		{ $limit: qty }
	]);

	posts = await User.populate(posts, {path: 'user'});

    res.status(200).json(posts);

  } catch (err) {
		res.status(400).json({message: err.message});
  }
};

module.exports = {
  createPost,
  getPost,
  updatePost,
  deletePost,
  getPosts  
}
