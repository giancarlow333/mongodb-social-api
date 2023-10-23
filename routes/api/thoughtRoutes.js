const router = require('express').Router();
const {
    getAllThoughts,
    addThought,
    getSingleThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(addThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId').post(addReaction).delete(deleteReaction);

module.exports = router;
