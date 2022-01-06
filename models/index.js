const Post = require('./Post');
const User = require('./User');

// associations
// fixed post belongsTo to post hasMany
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.hasMany(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Post }