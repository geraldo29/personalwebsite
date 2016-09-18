var App = angular.module('App', ['ngRoute']);

App.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    })
    .when('/about', {
      templateUrl: 'about.html',
      controller: 'AboutCtrl'
    })
    .when('/portfolio', {
      templateUrl: 'portfolio.html',
      controller: 'PortfolioCtrl'
    })
    .when('/resume', {
      templateUrl: 'resume.html',
      controller: 'ResumeCtrl'
    })
    .when('/contact', {
      templateUrl: 'contact.html',
      controller: 'ContactCtrl'
    })
    .otherwise({
      redirectTo: '/404'
    });
});


App.controller('AboutCtrl', function ($scope) {
        $scope.title = 'About Geraldo Lopez';
        $scope.body = 'Summary';
        $scope.message = 'Geraldo was born and raised in Puerto Rico. He is currently pursuing a bachelors degree in Computer Engineering in the University of Puerto Rico Mayaguez Campus.';
        $scope.message2 = 'An experienced engineering student with a proven track of success, working with companies and universities associations.';
        $scope.message3 = 'Seen as an open-minded leader ready to get things done. He is able to solve and analyze problems and can work through full projects which include designing, coding, testing, and integration, as part of his previous experiences.';
    })
    .controller('HomeCtrl', function ($scope) {
        $scope.title = 'Welcome';
        $scope.body = 'Home';
        $scope.message = 'Geraldo has made this website to see practice his web development skills and learn AngularJS.';
    })
    .controller('PortfolioCtrl', function ($scope) {
        $scope.title = 'Portfolio';
        $scope.body = 'Geraldo uploaded a few images of his projects here.';
        $scope.message = 'These are screenshots of some of the guis Geraldo has made and worked on. To see the code, press the Github logo';
    })
    .controller('ResumeCtrl', function ($scope) {
        $scope.title = 'Resume';
        $scope.message = 'Click on the resume to see my Linkedin page.';
    })
    .controller('ContactCtrl', function ($scope) {
        $scope.title = 'Contact';
        $scope.body = 'Below is my contact information.';
        $scope.message = 'Email:geraldo.lopez1@upr.edu';
        $scope.message2 = 'Phone:(787) 415-3699';
    })
    ;
    
    
    
var myApp = angular.module("myApp", []).controller("MyCtrl", function($scope){
  $scope.image = "https://s21.postimg.org/6vuu8ls47/rsz_1rsz_logo_facebook.png";

  })
  
