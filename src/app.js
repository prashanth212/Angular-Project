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
                templateUrl: "login/login.tmpl.html",
                controller: 'LoginCtrl'
            })
            .state('register', {
                url: "/register",
                templateUrl: "register/register.tmpl.html",
                requireLogin: true
            })
            .state('myaccounts', {
                url: "/myaccounts",
                templateUrl: "myaccount/myaccount.tmpl.html",
                requireLogin: true
            })

        .state('welcome', {
            url: "/welcome",
            templateUrl: "home/home.tmpl.html",
            requireLogin: false
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
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
                var requireLogin = toState.data.requireLogin;

                if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
                    event.preventDefault();
                    // get me a login modal!
                }
            });
    }]);