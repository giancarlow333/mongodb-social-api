const connection = require('../config/connection');
const { User, Thoughts } = require('../models');
//const { getRandomName, getRandomVideos } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = [
    {
        "username": "gio333",
        "email": "gio@whitaker.com"
    },
    {
        "username": "docELB",
        "email": "docbrown@bttf.com"
    },
    {
        "username": "MartyMcFly",
        "email": "marty.mcfly@bttf.com"
    },
    {
        "username": "Jennifer67",
        "email": "jennifer.parker@bttf.com"
    },
  ];
  /*const thoughts = [
    {
        "thoughtText": "This is a sample thought!",
        "username": "gio333",
    },
    {
        "thoughtText": "I am having a massive reaction!",
        "username": "docELB",
    },
  ];*/

  await User.collection.insertMany(users);
  //await Thoughts.collection.insertMany(thoughts);

  console.table(users);
  //console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

