// This where we make our associations
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
});

module.exports = {User, Comment, Post};


