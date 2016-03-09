SimpleBlog = {};

SimpleBlog.userDetail = function(user) {
  delete user.services;
  delete  user.createdAt;
    return user;
};