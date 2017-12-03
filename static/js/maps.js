function myMap() {
  myCenter=new google.maps.LatLng(9.990918, 76.292943);
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
    title: "TECHSTACK INNOVATIONS",
    pixelOffset: new google.maps.Size(100,140),
  });
  marker.setMap(map);
}
