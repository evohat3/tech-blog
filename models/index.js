const User = require('./Users');
const Blog = require('./Blogs');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Blog.belongsTo(User, {
    foreignKey: 'user_id'
  });
  


module.exports = { User, Blog };