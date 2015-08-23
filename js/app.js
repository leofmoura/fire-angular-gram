var insta = angular.module('insta', ['ngRoute', 'firebase', 'ngImgCrop']);

insta.constant('APP_SETTINGS', {
    "FIREBASE_URL": "https://instaleo.firebaseio.com/"
});

insta.run(function ($rootScope, $location) {
    $rootScope.user = null;

    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if ($rootScope.user == null) {
            //$location.path("/login");
        }
    });
});

insta.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'TesteCtrl',
            controllerAs: 'vm',
            templateUrl: 'pages/home.html'
        });
});