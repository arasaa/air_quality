const express = require('express');
const { getCommunity } = require('../controllers/communityControllers');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

//getting all routes from background
router.route('/').get(protect, getCommunity)
//create route
//router.route('/create').post()
//updating and deleting routes by _id
// router.route('/:id')
// .get()
// .put()
// .delete()


module.exports = router;