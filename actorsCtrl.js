app.controller("actorsCtrl", function($scope){

      //**** Business Logic - this will eventually move to service ****
  function actor(fname, lname, image, birthday, imdb) {
    this.fname = fname;
    this.lname = lname;
    this.image = image;
    this.birthday = birthday;
    this.imdb = imdb;
  };

  actor.prototype.fullName = function() {
    var fullName = this.fname + " " + this.lname;
    return fullName;
  };

  // Load 6 actors
  $scope.actors = [];
  $scope.actors.push(new actor("Brie", "Larson", "https://m.media-amazon.com/images/M/MV5BMjExODkxODU3NF5BMl5BanBnXkFtZTgwNTM0MTk3NjE@._V1_SY1000_CR0,0,721,1000_AL_.jpg", "1989-10-01", "https://www.imdb.com/name/nm0488953/"));
  $scope.actors.push(new actor("Bradley", "Cooper", "https://m.media-amazon.com/images/M/MV5BMjM0OTIyMzY1M15BMl5BanBnXkFtZTgwMTg0OTE0NzE@._V1_SY1000_CR0,0,650,1000_AL_.jpg", "1975-01-05", "https://www.imdb.com/name/nm0177896/"));
  $scope.actors.push(new actor("Emilia", "Clarke", "https://m.media-amazon.com/images/M/MV5BNjg3OTg4MDczMl5BMl5BanBnXkFtZTgwODc0NzUwNjE@._V1_SY1000_CR0,0,666,1000_AL_.jpg", "1986-10-23", "https://www.imdb.com/name/nm3592338/"));
  $scope.actors.push(new actor("Inbar", "Lavi", "https://m.media-amazon.com/images/M/MV5BOTZiNDc5ZmEtODQzOC00Nzk1LWIzZTctZjAxYTI2N2UxYTQ3XkEyXkFqcGdeQXVyMTcyODYzOTg@._V1_SY1000_CR0,0,884,1000_AL_.jpg", "1986-10-27", "https://www.imdb.com/name/nm2819413/"));
  $scope.actors.push(new actor("Jennifer", "Lawrence ", "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_SY1000_CR0,0,626,1000_AL_.jpg", "1990-08-15", "https://www.imdb.com/name/nm2225369/"));
  $scope.actors.push(new actor("Chris", "Hemsworth", "https://m.media-amazon.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_.jpg", "1983-08-11", "https://www.imdb.com/name/nm1165110/"));
  
  console.log($scope.actors);
  
  
  //**** Presentation Logic ****/
//   $scope.addActor = function() {
//     var actor = new actor("Chris", "Hemsworth", "https://m.media-amazon.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_.jpg", "1983-08-11", "https://www.imdb.com/name/nm1165110/");
//     $scope.actor.push(actor);
//   }
  
  
});