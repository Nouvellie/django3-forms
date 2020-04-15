var app = angular.module('mainModule', []);
app.config(function ($interpolateProvider) {
    'use strict';
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});
app.controller("firstController", function ($http, $scope) {
    'use strict';
});