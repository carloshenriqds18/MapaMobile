$(document).ready(function(){
  $(document).on("click","#gps",function(){
     
        

          var onSuccess = function(position) {
       L.mapquest.key = 'uAh2ffv1FzBzvq7W8GBNtvoxoeRJZtp1';

        var map = L.mapquest.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 18
        });
    };



    navigator.geolocation.getCurrentPosition(onSuccess);
      


});
})

