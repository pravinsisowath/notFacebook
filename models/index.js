const User = require('./User.js')
const Post = require('./Post.js')
const Friends = require('./Friendlist.js')
const Comment = require('./Comment.js')

User.hasMany(Friends)

User.hasMany(Post, {foreignKey: {allowNull: false, onDelete: 'CASCADE'}})
// User.belongsToMany(User, { as : 'friends', foreignKey: 'useruuid', through: 'User_Friend'})
Post.hasMany(Comment)
Comment.belongsTo(User)


module.exports = { User , Post, Comment, Friends}