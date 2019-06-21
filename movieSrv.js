app.factory("movieSrv", function($log,$http,$q,convert) {
  
  function Movie (data/*name, releaseDate, length, poster, stars*/) {
      this.mname = data.mname;
      this.releasDate = data.releasDate;
      this.length = data.length;
      this.poster = data.poster;
      this.stars = data.stars;
      this.director = data.director;
      this.imdb = data.imdb;
  };

  Movie.prototype.toMinutes = function() {
        return convert.convertToMinutes(this.length);
      }
  
  var movies = [];
  function getMovies() {
      var async = $q.defer();
 
      $http.get("movie.json").then(function(res) {
        // on success
        
        for (var i = 0; i < res.data.length; i++) {
          var movie = new Movie(res.data[i]);
          movies.push(movie);
        }
        // movies are ready - I can resolve the promise
      //   alert("hi")

        async.resolve(movies);
      }, function(err) {
        $log.error(err);
        async.reject(err);
      });
  
      return async.promise;
    }

    function getMovieByIndex(index) {
      var async = $q.defer();
  
      // Getting all the cars and returning a single car by its index in the array
      getMovies().then(function(movies) {
        if (index >= movies.length) {
          async.reject("Index out of bounds")
        }
        
        async.resolve(movies[index]);
      }, function(err) {
        async.reject(err);
      })
  
      return async.promise;
    }
    return {
      getMovies: getMovies,
      getMovieByIndex: getMovieByIndex
    }
  
    
  
});