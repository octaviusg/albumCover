const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a post

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.update({ $set: req.body });
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete a post

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//like a post

router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("the post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("the post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/album-info/:id", async (req, res) => {
  try {
    const albumPost = await Post.findById({ _id: req.params.id });

    res.status(200).json(albumPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//explore posts
router.get("/explore/:username", async (req, res) => {
  try {
    const posts = await Post.find();
    const shuffled = posts.sort(() => Math.random() - 0.7);

    res.status(200).json(shuffled);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get bookmarked posts
router.get("/bookmarks/:userId", async (req, res) => {
  try {
    const posts = await Post.find({ likes: req.params.userId });

    res.status(200).json(posts.sort());
  } catch (err) {
    res.status(500).json(err);
  }
});

//get timeline posts
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts).reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

//get users all posts
router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id });
    res.status(200).json(posts.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

//get users collection
router.get("/collection/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const collectionPosts = await Post.find({ userId: user._id });
    const shuffled = collectionPosts.sort(() =>
      Math.floor(Math.random() - 0.7)
    );
    res.status(200).json(shuffled);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const title = req.query.title;
  const genre = req.query.genre;

  try {
    const theyear = await Post.find({ title: title });

    res.status(200).json(theyear);
  } catch (err) {
    res.status(500).json();
  }
});

module.exports = router;
