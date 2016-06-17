var app = angular.module('firmaElectronicaApp',['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'login.html',
        controller: 'loginController'
    })
    .when('/dashboard',{
        templateUrl: 'dashboard.html'
    })
    .otherwise({
        redirectTo:'/'
    });
});
app.controller('loginController',['$scope','$location',
function($scope,$location){
    $scope.nombre='Lenin'
    $scope.login= function(){
        var uname=$scope.username;
        var password= $scope.password;
        alert('hola')
        if($scope.username=='admin'&& $scope.password=='admin'){
            alert('Paso el Login')
            $location.path('/dashboard');
        }
    }
}]);