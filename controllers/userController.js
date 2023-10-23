const { User, Thoughts } = require('../models');

module.exports = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update an existing user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { username: req.params.username, email: req.params.email },
        { new: true },
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a user and associated Thoughts
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      await Thoughts.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: 'User and associated Thoughts deleted!' })
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get friends
  async getFriends(req, res) {
    try {
      const friends = await User.findOne({ _id: req.params.userId })
        .select('friends');

      if (!friends) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(friends);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // add a friend
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove friend
  async deleteFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      
      res.json({ message: 'User removed as friend!' })
    } catch (err) {
      res.status(500).json(err);
    }
  },
}