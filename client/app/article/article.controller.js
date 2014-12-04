'use strict';

angular.module('myDiaryApp')
  .controller('ArticleCtrl', function ($scope, articles) {
    $scope.articles = [] ;
  
  articles.getAll().success(function(response) {
    $scope.articles = response ;
  })

    $scope.message = 'Hello';
  })
.controller('showArticleController', function($state , $scope , articles){
  $scope.id = $state.params.id ;
})
.controller('saveArticleController', function($state , $scope , articles){
  $scope.id = $state.params.id ;
  $scope.newArticle = {} ;
  $scope.saveArticle = function() {
    console.log($scope.newArticle.title);
    articles.saveOne($scope.newArticle).success(function(response){
      console.log(response);
    });
  
  };
})
