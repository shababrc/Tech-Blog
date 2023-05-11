const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/', homeRoutes);

module.exports = router;