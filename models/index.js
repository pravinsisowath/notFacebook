<<<<<<< HEAD
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
=======
const User = require('./User.js')
const Post = require('./Post.js')
const Friend = require('./Friend.js')
const FriendReq = require('./FriendReq.js')
const Comment = require('./Comment.js')

User.belongsToMany(User, {as : 'friend', through : 'myfriend'})
User.belongsToMany(User, { as: 'Requestees', through: 'friendrequests', foreignKey: 'requesterId', onDelete: 'CASCADE'});
User.belongsToMany(User, { as: 'Requesters', through: 'friendrequests', foreignKey: 'requesteeId', onDelete: 'CASCADE'});

User.hasMany(Post, {foreignKey: {allowNull: false, onDelete: 'CASCADE'}})
Post.belongsTo(User)
Post.hasMany(Comment)
Comment.belongsTo(Post)


module.exports = { User , Post, Comment, Friend, FriendReq}
>>>>>>> 5f809f55e440901f50f6efbf960d456f75e946e5
