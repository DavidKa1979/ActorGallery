app.controller("actorsCtrl", function($scope){
$scope.n1=0
$scope.n2=0
$scope.sum=function(){
    return $scope.n1 + $scope.n2;
}

$scope.subtract=function(){
    return $scope.n1 - $scope.n2;
}

$scope.mult=function(){
    return $scope.n1 * $scope.n2;
}

$scope.div=function(){
    return ($scope.n1 / $scope.n2);
}

} )