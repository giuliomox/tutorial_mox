let app = angular.module("app",[]);

app.controller("controller", function($scope) {
    $scope.nome = "Mario";
    $scope.cognome = "Rossi";
});