const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
        type: Schema.Types.String,
        required: true,
        unique: true,
        // need to figure how to trim
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true,
        // need validator
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
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

// friendCount: virtual that counts the number of friends, i.e. returns the length of that array
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
