'use strict';

angular.module('myDiaryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('article', {
        url: '/articles',
        templateUrl: 'app/article/article.html',
        controller: 'ArticleCtrl'
      })
    .state('article.show', {
        url: '/:id',
        templateUrl: 'app/article/single-article.html',
        controller: 'showArticleController'
      })
    .state('article.save', {
        url: '/new',
        templateUrl: 'app/article/form.html',
        controller: 'saveArticleController'
      });
  });