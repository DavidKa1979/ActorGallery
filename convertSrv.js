app.factory("convert", function($log) {
  
    function convertToMinutes(minutes) {
      $log.info("Converting " + minutes + " to Hours...");
      return (parseInt(minutes/60) + "h " + (minutes%60) + "min");
    }
    
    return {
        convertToMinutes: convertToMinutes
    }

    //return convertToMinutes;
    // var kmRates = {
    //   KM : 1,
    //   MILE : 0.621371,
    //   METER : 1000,
    //   FEET : 3280.84,
    //   CM : 100000,
    //   INCH : 39370.1
    // }
    
    // function distance(distance, inUnit, outUnit) {
    //   return distance * outUnit / inUnit;
    // }
    
    
    
    // Each service must return an object containing the functions/properties 
    // the we want to expose
    // return {
    //   convertKmToMile : convertKmToMile,
    //   distance : distance,
    //   kmRates : kmRates
    // };
  
    // var objectReturned = {
    //   convertKmToMile : convertKmToMile
    // }
    
    // return objectReturned;
  
    
  });