'use strict';

angular.module('myDiaryApp')
.factory('articles', function ($http, Auth) {
  // Service logic
  // ...

  var user_id = Auth.getCurrentUser()._id
  var o = {};
  o.getAll = function() {
    return $http.get('/api/users/'+ user_id+ '/articles/')
  }

  o.getOne= function(id) {
    return $http.get('/api/users/'+user_id + '/articles'+id)
  }

  o.updateOne = function(article) {
    return $http.put('/api/users/'+user_id + '/articles'+article._id , article);
  }
  o.deleteOne = function(id) {
    return $http.delete('/api/users/'+user_id + '/articles'+id);
  }
  o.saveOne = function(article) {
    return $http.post('/api/users/'+user_id + '/articles', article);
  }


  // Public API here
  return o ;
});
