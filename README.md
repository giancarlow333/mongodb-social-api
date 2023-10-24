# MongoDB Social API

## Description

[![License: MIT License](https://img.shields.io/badge/license-MIT_License-blue.svg)](https://choosealicense.com/licenses/mit/)

This repo is a demonstration backend for a hypothetical social media site, done in JavaScript and MongoDB.

To quote the assignment:

> Your challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Code Sources

* Boilerplate code in [/index.js](), [/config/connection.js](), [/controllers/userController.js](), [/routes/index.js](), [/routes/api/index.js](), and [utils/seed.js]() was copied from class activity 18.26.
* I consulted [this StackOverflow thread](https://stackoverflow.com/questions/11604928/is-there-a-way-to-auto-generate-objectid-when-a-mongoose-model-is-newed) for creating ObjectIDs for the "Reaction" subdocument, and [this thread](https://stackoverflow.com/questions/33049707/push-items-into-mongo-array-via-mongoose) for adding that reaction to the "reactions" array of the Thought it reacted to (in particular, the answer from  [Adrian Schneider](https://stackoverflow.com/users/434443/adrian-schneider)).
* I consulted [this thread](https://stackoverflow.com/questions/26252569/mongoose-delete-subdocument-array-item) for deleted the subdocument reactions from the array mentioned above.
* For formatting timestamps, I consulted [the Mongoose.JS documentation](https://mongoosejs.com/docs/tutorials/getters-setters.html) and [this StackOverflow thread](https://stackoverflow.com/questions/7443142/how-do-i-format-dates-from-mongoose-in-node-js), and my code is largely copied from [this thread on appsloveworld.com](https://www.appsloveworld.com/mongodb/100/220/how-to-use-getter-or-setter-with-mongoose-timestamps).

## TODO

* Finish User and Thought PUT routes
* Add Friend POST and DELETE routes

## Video link

Click [here](https://drive.google.com/file/d/1Krr_rS1r2ywv_E_QkL_CrwH0BKeXJ4GA/view?usp=drive_link) for a video showing the API's functionality.

---

(c) 2023 Giancarlo Whitaker