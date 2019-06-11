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
  $scope.actors.push(new actor("Brie", "Larson", "https://m.media-amazon.com/images/M/MV5BMjExODkxODU3NF5BMl5BanBnXkFtZTgwNTM0MTk3NjE@._V1_SY1000_CR0,0,721,1000_AL_.jpg", 2016-01-05, "https://www.imdb.com/name/nm0488953/"));
//   $scope.actors.push(new actor("Honda", "Civic", 150000, 2011));
//   $scope.actors.push(new actor("Volvo", "V40", 15000, 2018));
//   $scope.actors.push(new actor("Volvo", "V40", 15000, 2018));
//   $scope.actors.push(new actor("Volvo", "V40", 15000, 2018));
//   $scope.actors.push(new actor("Volvo", "V40", 15000, 2018));
  
  console.log($scope.actors);
  
  
  //**** Presentation Logic ****/
//   $scope.addActor = function() {
//     var actor = new actor("Subaru", "B4", 234000, 2005);
//     $scope.actor.push(actor);
//   }
  
  
});