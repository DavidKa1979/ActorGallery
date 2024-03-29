app.controller("actorsCtrl", function($scope, $http){

      //**** Business Logic - this will eventually move to service ****
  function Actor(fname, lname, image, birthday, imdb) {
    this.fname = fname;
    this.lname = lname;
    this.image = image;
    this.birthday = new Date (birthday);
    this.imdb = imdb;
  };

  Actor.prototype.fullName = function() {
    var fullName = this.fname + " " + this.lname;
    return fullName;
  };

  // Load 6 actors
  $scope.actors = [];
  $http.get("actor.json").then(function(res) {
    // on success
    for (var i = 0; i < res.data.length; i++) {
      var actor = new Actor(res.data[i].fname, res.data[i].lname, 
        res.data[i].image, res.data[i].birthday, res.data[i].imdb);
      $scope.actors.push(actor);
    }
  }, function(err) {
    console.error(err);
  })  
  // $scope.actors = [];
  // $scope.actors.push(new Actor("Brie", "Larson", "https://m.media-amazon.com/images/M/MV5BMjExODkxODU3NF5BMl5BanBnXkFtZTgwNTM0MTk3NjE@._V1_SY1000_CR0,0,721,1000_AL_.jpg", "1989-10-01", "https://www.imdb.com/name/nm0488953/"));
  // $scope.actors.push(new Actor("Bradley", "Cooper", "https://m.media-amazon.com/images/M/MV5BMjM0OTIyMzY1M15BMl5BanBnXkFtZTgwMTg0OTE0NzE@._V1_SY1000_CR0,0,650,1000_AL_.jpg", "1975-01-05", "https://www.imdb.com/name/nm0177896/"));
  // $scope.actors.push(new Actor("Emilia", "Clarke", "https://m.media-amazon.com/images/M/MV5BNjg3OTg4MDczMl5BMl5BanBnXkFtZTgwODc0NzUwNjE@._V1_SY1000_CR0,0,666,1000_AL_.jpg", "1986-10-23", "https://www.imdb.com/name/nm3592338/"));
  // $scope.actors.push(new Actor("Inbar", "Lavi", "https://m.media-amazon.com/images/M/MV5BOTZiNDc5ZmEtODQzOC00Nzk1LWIzZTctZjAxYTI2N2UxYTQ3XkEyXkFqcGdeQXVyMTcyODYzOTg@._V1_SY1000_CR0,0,884,1000_AL_.jpg", "1986-10-27", "https://www.imdb.com/name/nm2819413/"));
  // $scope.actors.push(new Actor("Jennifer", "Lawrence ", "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_SY1000_CR0,0,626,1000_AL_.jpg", "1990-08-15", "https://www.imdb.com/name/nm2225369/"));
  // $scope.actors.push(new Actor("Chris", "Hemsworth", "https://m.media-amazon.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_.jpg", "1983-08-11", "https://www.imdb.com/name/nm1165110/"));
  
  console.log($scope.actors);
  
  
  /**** Presentation Logic ****/
  $scope.addActor = function() {
    var actor = new Actor("Chris", "Hemsworth", "https://m.media-amazon.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_.jpg", "1983-08-11", "https://www.imdb.com/name/nm1165110/");
    $scope.actors.push(actor);
  }
  
  $scope.query = "";
  $scope.filterAct = function(actor) {
    // If the user didn't insert a filter string then show this actor
    // if (!$scope.query) {
    //   return true;
    // } else 
      // Reaching here means that the user entered a filter text
      if (actor.fname.toLowerCase().includes($scope.query.toLowerCase()) || 
      actor.lname.toLowerCase().includes($scope.query.toLowerCase())) {
    return true;
  } else {
    return false;
  }
      // if the filter string exists in the actor first name or last name
      // then return true otherwise return false

}

  // $scope.orderProp = "";
  // $scope.orderReverse = false;
  // $scope.orderByProp = function(propName) {
    
  //   if ($scope.orderProp !== propName) {
  //     // Clicking on this column for the first time
  //     // I want an ascending order so putting false in reverse
  //     $scope.orderProp = propName;
  //     $scope.orderReverse = false;
  //   } else {
  //     // Clicking on the same columns - reversing the order
  //     $scope.orderReverse = !$scope.orderReverse;
  //   }
    
    
  // }
  $scope.activeCard=null;
  $scope.clickCard = function(actor) {
    if ($scope.activeCard === actor) {
      $scope.activeCard=null;
    } else {
    $scope.activeCard = actor
  }
}
  

});