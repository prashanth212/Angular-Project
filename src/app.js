angular.module('yashCRM', ['ui.router', 'ngCookies'])
    .config(function ($stateProvider, $urlRouterProvider) {

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
        .state('welcome', {
            url: "/welcome",
            templateUrl: "home/home.tmpl.html"
        })

        .state('myaccounts', {
            url: "/myaccounts",
            templateUrl: "myaccount/myaccount.tmpl.html"
        })

    })
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
  
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/main');
            }
        });
    }]);