const User = require("./User.js");
const Post = require("./Post.js");
const Friends = require("./Friendlist.js");
const Comment = require("./Comment.js");

// User.belongsToMany(User, { as : 'friends', foreignKey: 'useruuid', through: 'User_Friend'})
User.hasMany(Friends);
User.hasMany(Post, { foreignKey: { allowNull: false, onDelete: "CASCADE" } });
Post.hasMany(Comment);
Post.belongsTo(User);
Comment.belongsTo(Post);
Comment.belongsTo(User);

module.exports = { User, Post, Comment, Friends };
