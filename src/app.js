angular.module('yashCRM', ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /home
      $urlRouterProvider.otherwise("/main")
      
      $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "main/main.tmpl.html"
        })
          
        .state('login', {
            url: "/login",
            templateUrl: "login/login.tmpl.html"
        })

    })