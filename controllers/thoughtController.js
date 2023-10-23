const { User, Thoughts } = require('../models');

module.exports = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thots = await Thoughts.find();
      res.json(thots);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // Get a single thought (by ID)
  async getSingleThought(req, res) {
    try {
      const thought = await Thoughts.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create a new thought
  async addThought(req, res) {
    try {
      const thought = await Thoughts.create(req.body);

      // Push its id to the User array
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: thought } },
        { new: true },
      );
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create a new reaction
  async addReaction(req, res) {
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete a reaction
  async deleteReaction(req, res) {
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  },
}