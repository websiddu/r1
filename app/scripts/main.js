(function() {

var resumeApp = angular.module('resumeApp', []);

resumeApp.controller('resumeController', ['$scope', '$http', function($scope, $http) {
  $scope.data = null;
  $scope.init = function() {
    $http({
      method: "GET",
      url: "data/data.json"
    }).success(function(data, status){
      console.log(data);
      $scope.data = data;
    })
  }
  $scope.init();
}]);
})();
