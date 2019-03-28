var app = angular.module("todo", []);
app.controller("todoList", function($scope) {
  $scope.todolist = ["hello", "hai"];
  $scope.addItems = function() {
    $scope.todolist.push($scope.item_to_do);
    //console.log(todolist);
  };
  $scope.deleteItem = function(id) {
    $scope.todolist.splice(id, 1);
  };
});
