app.controller("movieCtrl", function (movieSrv, $location, $scope) {
  // function Movie(mname, releasDate, length, poster, stars, director, imdb) {
  //     this.mname = mname;
  //     this.releasDate = releasDate;
  //     this.length = length;
  //     this.poster = poster
  //     this.stars = stars;
  //     this.director = director;
  //     this.imdb = imdb;
  //   };

  //   Movie.prototype.toMinutes = function() {
  //     return convert.convertToMinutes(this.length);
  //   }

  $scope.movies = [];
  movieSrv.getMovies().then(function (movies){
    $scope.movies = movies;
  }, function(err) {
    $log.error(err);
  })
  
  $scope.selectedMovie=null;
  $scope.onSelectMovie = function(movie) {
    if($scope.selectedMovie === movie) {
      $scope.selectedMovie = null;
    } else {
      $scope.selectedMovie = movie;
    }
  }


  // $http.get("movie.json").then(function(res) {
  //   // on success
  //   for (var i = 0; i < res.data.length; i++) {
  //     var movie = new Movie(res.data[i].mname, res.data[i].releasDate, 
  //       res.data[i].length, res.data[i].poster, res.data[i].stars, res.data[i].director, res.data[i].imdb);
  //     $scope.movies.push(movie);
  //   }
  // }, function(err) {
  //   console.error(err);
  // })  


  $scope.openMovieDetails = function (movie) {
    var index = $scope.movies.indexOf(movie);
    $location.path("/movie/" + index);
  }

  // $scope.movies = [];
  // $scope.movies.push(new Movie("Men in Black: International", "2019-07-13", "116", "https://m.media-amazon.com/images/M/MV5BMDZkODI2ZGItYTY5Yi00MTA4LWExY2ItM2ZmNjczYjM0NDg1XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UX182_CR0,0,182,268_AL_.jpg", ["Chris Hemsworth", "Tessa Thompson", "Kumail Nanjiani"], "F. Gary Gray"));
  // $scope.movies.push(new Movie("Dark Phoenix", "2019-07-07", "113", "https://m.media-amazon.com/images/M/MV5BMjAwNDgxNTI0M15BMl5BanBnXkFtZTgwNTY4MDI1NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", ["James McAvoy", "Michael Fassbender", "Jennifer Lawrence"], "Simon Kinberg"));
  // $scope.movies.push(new Movie("John Wick: Chapter 3 - Parabellum", "2019-05-17", "131", "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg", ["Keanu Reeves", "Halle Berry", "Ian McShane"], "Chad Stahelski"));

  console.log($scope.movies);


});