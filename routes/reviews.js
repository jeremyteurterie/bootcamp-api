const express = require('express');
const { getReviews } = require('../controllers/reviews');

const Review = require('../models/Review');

const router = express.Router({ mergeParams: true });

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router.route('/').get(
  advancedResults(Review, {
    path: 'bootcamp',
    select: 'name description',
  }),
  getReviews
);

//   .post(protect, authorize('publisher', 'admin'), addReview);
// router
//   .route('/:id')
//   .get(getReview)
//   .put(protect, authorize('publisher', 'admin'), updateReview)
//   .delete(protect, authorize('publisher', 'admin'), deleteReview);

module.exports = router;
