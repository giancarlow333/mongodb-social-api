const { Schema, model } = require('mongoose');

// Schema for Reaction subdocument
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    auto: false,
  },
  reactionBody: {
    type: Schema.Types.String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  username: {
    type: Schema.Types.String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: Schema.Types.String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: Schema.Types.String,
      required: true,
    },
    reactions: [ reactionSchema ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// reactionCount: virtual that counts the number of reactions, i.e. returns the length of that array
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
});

// TODO: Format timestamp on query

// Initialize our Thought model
const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;
