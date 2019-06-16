app.controller("movieCtrl", function($scope) {
    function Movie(mname, releasDate, length, poster, stars, diretor) {
        this.mname = mname;
        this.releasDate = releasDate;
        this.length = length;
        this.poster = poster
        this.stars = stars;
        this.diretor = diretor;
      };

    $scope.movies = [];
  $scope.movies.push(new Movie("Men in Black: International", "2019-07-13", "116", "https://m.media-amazon.com/images/M/MV5BMDZkODI2ZGItYTY5Yi00MTA4LWExY2ItM2ZmNjczYjM0NDg1XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UX182_CR0,0,182,268_AL_.jpg", ["Chris Hemsworth", "Tessa Thompson", "Kumail Nanjiani"], "F. Gary Gray"));
  $scope.movies.push(new Movie("Dark Phoenix", "2019-07-07", "113", "https://m.media-amazon.com/images/M/MV5BMjAwNDgxNTI0M15BMl5BanBnXkFtZTgwNTY4MDI1NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", ["James McAvoy", "Michael Fassbender", "Jennifer Lawrence"], "Simon Kinberg"));
  $scope.movies.push(new Movie("John Wick: Chapter 3 - Parabellum", "2019-05-17", "131", "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg", ["Keanu Reeves", "Halle Berry", "Ian McShane"], "Chad Stahelski"));
   
  console.log($scope.movies);
  
 
});